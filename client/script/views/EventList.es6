"use strict";

import React from 'react';
import moment from 'moment';

var EventList = React.createClass({
	propTypes: {
		eventList: React.PropTypes.array.isRequired,
		onSelectEvent: React.PropTypes.func
	},
	getDefaultProps: function () {
		return {
			onSelectEvent: function () {}
		};
	},
	selectEvent: function (event) {
		this.props.onSelectEvent(event);
	},
	render: function () {

		var self = this;

		var eventitems = this.props.eventList.map(function (event) {
			return <EventItem key={event.id} event={event} onClick={self.selectEvent.bind(self, event)}/>;
		});

		return (
			<div className="eventlist">
				{eventitems}
			</div>
		);
	}
});

var EventItem = React.createClass({
	propTypes: {
		event: React.PropTypes.object.isRequired,
		onClick: React.PropTypes.func
	},
	getDefaultProps: function () {
		return {
			onClick: function () {}
		};
	},
	render: function () {
		return (
			<div className="event">
				<span className="eventname">{this.props.event.name}</span>
				<div className="eventitemdetails">
					<span className="eventtime">
						{moment(this.props.event.time).format("DD.MM.YYYY HH:mm")}
					</span>
					<span className="eventlocation">{this.props.event.location}</span>
				</div>
			</div>
		);
	}
});

export default EventList;