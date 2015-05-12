"use strict";

var _ = require('lodash');

var methods = {
	
	listEvents: function () {
		return _.cloneDeep(this._events);
	},

	createEvent: function (data) {
		var ev = _.omit(data, ['id', 'registrants']);
		_.defaults(ev, {
			id: _.uniqueId('event_'),
			name: 'New Event',
			time: Date.now(),
			location: 'TBD',
			capacity: 10,
			registrants: []
		});
		this._events.push(ev);
		return ev;
	},
	
	readEvent: function (id) {
		return _.cloneDeep(_.find(this._events, {id: id}));
	},
	
	updateEvent: function (id, newdata) {
		var ev = _.find(this._events, {id: id});
		_.assign(
			ev,
			_.omit(newdata, ['id', 'registrants'])
		);
		return ev;
	},
	
	deleteEvent: function (id) {
		var ev = _.find(this._events, {id: id});
		this._events = _.without(
			this._events,
			ev
		);
		return ev;
	},
	
	addParticipant: function (eventId, participant) {
		var par = _.omit(participant, 'time');
		_.defaults(par, {
			name: 'Unknown',
			time: Date.now()
		});
		_.find(this._events, {id: eventId})
			.participants
			.push(par);

		return par;
	},
	
	removeRegistrant: function (eventId, participant) {
		var ev = _.find(this._events, {id: eventId});
		var par = _.find(ev.participants, participant);
		ev.participants = _.without(ev.participants, par);
	}

}

module.exports = function () {
	return Object.create(methods, {
		_events: {
			value: [],
			enumerable: false,
			writable: true
		}
	});
}