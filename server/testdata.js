"use strict";

var _ = require('lodash');

module.exports = function (eventmodel) {

	var ev1 = eventmodel.createEvent({
		name: 'Community Frontend - React.js Workshop',
		time: Date.now(),
		location: 'Festningen (BG14)',
		capacity: 24
	});

	eventmodel.addRegistrant(ev1.id, {
		name: 'Eirik Reksten'
	});

	eventmodel.addRegistrant(ev1.id, {
		name: 'Silje Garshol Løvaas'
	});


	var ev2 = eventmodel.createEvent({
		name: 'Skandinavisk Morgenmøte',
		location: 'Atriet 22.etasje i Posthuset',
		time: new Date(2015, 3, 13, 08, 30).getTime(),
		capacity: 150
	});


	var ev3 = eventmodel.createEvent({
		name: 'Romantisk middag for to',
		location: 'Statholdergaarden',
		time: new Date(2015, 3, 16, 20, 0).getTime(),
		capacity: 2
	});

	eventmodel.addRegistrant(ev3.id, {
		name: 'Bjarne Berntsen'
	});

	_.delay( function () {
		eventmodel.addRegistrant(ev3.id, {
			name: 'Lotte Larsen'
		})
	}, 50)
	
    _.delay(function () {
    	eventmodel.addRegistrant(ev3.id, {
    		name: 'Ivar Innpåsliten'
    	});
    }, 100);
}