require('style/style.css');

import React from 'react';
import Application from 'script/views/RegistrationApp';
import $ from 'jquery';

$(function () {

	React.render(
		<Application />,
		document.getElementById('registration')
	);

});