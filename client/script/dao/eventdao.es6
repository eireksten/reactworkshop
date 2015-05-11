"use strict";

import $ from 'jquery';

export function listEvents() {
	return $.ajax({
        type: 'GET',
        url: '/event',
        dataType: 'json',
        cache: false
    });
};

export function createEvent(event) {
    return $.ajax({
        type: 'POST',
        url: '/event',
        contentType: 'application/json',
        dataType: 'json',
        data: event
    });
};

export function readEvent(eventId) {
    return $.ajax({
        type: 'GET',
        url: '/event/' + eventId,
        dataType: 'json',
        cache: false
    });
};

export function updateEvent(event) {
    return $.ajax({
        type: 'PUT',
        url: '/event/' + event.id,
        dataType: 'json',
        contentType: 'application/json',
        data: event
    });
};

export function deleteEvent(event) {
    return $.ajax({
        type: 'DELETE',
        url: '/event/' + event.id,
    });
};

export function addRegistrant(event, registrant) {
    return $.ajax({
        type: 'POST',
        url: '/event/' + event.id + '/addregistrant',
        dataType: 'json',
        contentType: 'application/json',
        data: registrant
    });
};

export function removeRegistrant(event, registrant) {
    return $.ajax({
        type: 'POST',
        url: '/event/' + event.id + '/removeregistrant',
        dataType: 'json',
        contentType: 'application/json',
        data: registrant
    });
};