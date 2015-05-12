"use strict";

import React from 'react';

import EventList from 'script/views/EventList';
import EventView from 'script/views/EventView';

import EventStore from 'script/store/eventstore';

import * as Section from 'script/constants/sections';


var RegistrationApp = React.createClass({
	getInitialState: function () {
		return {
			section: Section.EVENTLIST,
			events: [],
			currentEvent: undefined
		};
	},

	componentWillMount: function () {
		this.updateState();
	},

	componentDidMount: function () {
		EventStore.on('update', this.updateState);
	},

	componentWillUnmount: function () {
		EventStore.removeListener('update', this.updateState);
	},

	updateState: function () {
		this.setState({
			events: EventStore.listEvents()
		});
	},

	handleEventSelected: function (event) {
		this.setState({
			section: Section.EVENTVIEW,
			currentEvent: event
		});
	},
	showEventList: function () {
		this.setState({
			currentEvent: null,
			section: Section.EVENTLIST
		});
	},
	render: function () {

		var contents = null;

		if (this.state.section === Section.EVENTVIEW) {
			contents = <EventView event={this.state.currentEvent} onClose={this.showEventList} />;
		} else {
			contents = <EventList eventList={this.state.events} onSelectEvent={this.handleEventSelected} />
		}

		return (
			<section className="registrationapp">
				{contents}
			</section>
		);
	}
});


export default RegistrationApp;