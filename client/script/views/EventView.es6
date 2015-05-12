"use strict";

import React from 'react';

var EventView = React.createClass({
	propTypes: {
		event: React.PropTypes.object.isRequired,
		onClose: React.PropTypes.func
	},
	getDefaultProps: function () {
		return {
			onClose: function () {}
		};
	},
	closeEventView: function () {
		this.props.onClose();
	},
	render: function () {
		return (
			<section className="event">
				{'Oh no! This view has not been implemented! You should do something about that!'}
				<br />
				<a href="#" onClick={this.closeEventView}>Back to event list.</a>
			</section>
		);
	}
});

export default EventView;