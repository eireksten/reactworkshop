"use strict";

import * as DAO from 'script/dao/eventdao';
import events from 'events';
import _ from 'lodash';

var eventlist = [];
var isloading = true;

DAO.listEvents()
	.done(function (response) {
		eventlist = response;
		isloading = false;
		API.emit('update');
	});

var API = _.assign({

	isLoading: function () {
		return !!isloading;
	},

	listEvents: function () {
		return _.cloneDeep(eventlist);
	},

	getEventById: function (eventid) {
		return _.find(eventlist, {id: eventid})
	},

	createEvent: function (event) {

		DAO.createEvent(event)
			.done(function (response) {
				_.assign(event, response);
				API.emit('update');
			})
			.fail(function () {
				eventlist = _.without(eventlist, event);
				API.emit('update');
			});

		eventlist.push(event);
		API.emit('update');

	},

	updateEvent: function (event) {

		DAO.updateEvent(ev)
			.done(function () {
				_.assign(event, response);
				API.emit('update');
			})
			.fail(function () {
				eventlist = _.without(eventlist, ev);
				eventlist.push(original);
				API.emit('update');
			});

		var ev = _.find(eventlist, {id: event.id});
		var original = _.cloneDeep(ev);
		_.assign(ev, event);
		API.emit('update');
		
	},

	deleteEvent: function (event) {

		var ev = _.find(eventlist, {id: event.id});
		eventlist = _.without(eventlist, ev);

		API.emit('update');

		DAO.deleteEvent(ev)
			.fail(function (){
				eventlist.push(ev);
				API.emit('update');
			});
			
	},

	addParticipant: function (event, participant) {
		var ev = _.find(eventlist, {id: event.id});
		var reg = _.cloneDeep(participant)

		ev.participants.push(reg);

		DAO.addParticipant(ev, reg)
			.done(function (response) {
				_.assign(reg, response);
			})
			.fail(function () {
				ev.participants = _.without(ev.participants, participant);
			})
			.always(function () {
				API.emit('update');
			})


		API.emit('update');
	},

	removeParticipant: function (event, participant) {

		var ev = _.find(eventlist, {id: event.id});
		var reg = _.find(ev.participants, participant);

		ev.participants = _.without(ev.participants, reg);
		API.emit('update');

		DAO.removeParticipant(ev, reg)
			.fail(function () {
				ev.participants.push(reg);
				API.emit('update');
			});

		API.emit('update');
	}

}, events.EventEmitter.prototype);


export default API;