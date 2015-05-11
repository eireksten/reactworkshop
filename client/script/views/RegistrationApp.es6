"use strict";

import React from 'react';

import EventList from 'script/views/EventList';

import EventStore from 'script/store/eventstore';

import * as Section from 'script/constants/sections';


var RegistrationApp = React.createClass({
	getInitialState: function () {
		return {
			section: Section.EVENTLIST,
			events: []
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

	handleNavigation: function (section) {
		this.setState({
			section: section
		});
	},
	render: function () {
		return (
			<section className="registrationapp">
				<EventList eventList={this.state.events} />
			</section>
		);
	}
});


export default RegistrationApp;