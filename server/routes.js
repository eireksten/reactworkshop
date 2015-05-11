var _ = require('lodash');

module.exports = function (app, eventModel) {

	app.get('/event', function (req, res) {
        res.json(eventModel.listEvents());
    });

    app.post('/event', function (req, res) {
        var data = req.body;
        res.json(
            eventModel.createEvent(
                _.pick(data, ['name', 'time'])
            )
        );
    });

    app.get('/event/:id', function (req, res) {
        var eventId = req.params.id;
        var ev = eventModel.readEvent(eventId);
        if (!ev) {
            res.status(404).send('Event with id ' + id + ' not found!');
        }
        res.json(ev);
    });

    app.put('/event/:id', function (req, res) {
        var data = req.body,
            id = req.params.id;

        var updatedev = eventModel.updateEvent(
            id,
            _.pick(data, ['name', 'time'])
        );

        if (!updatedev) {
            res.status(404).send('Event with id ' + id + ' not found!');
        }

        res.json(updatedev);
    });

    app.delete('/event/:id', function (req, res) {
        var id = req.params.id;
        if (eventModel.deleteEvent(id)) {
            res.send('success');
        }
        res.status(404).send('Event with id ' + id + ' not found!');
    });

    app.post('/event/:id/addregistrant', function (req, res) {
        var eventId = req.params.id;
        var ev = eventModel.readEvent(eventId);
        if (!ev) {
            res.status(404).send('Event with id ' + id + ' not found!');
        }
        var registrant = req.body;
        eventModel.addRegistrant(eventId, registrant);
    });

    app.post('/event/:id/removeregistrant', function (req, res) {
        var eventId = req.params.id;
        var ev = eventModel.readEvent(eventId);
        if (!ev) {
            res.status(404).send('Event with id ' + id + ' not found!');
        }
        var registrant = req.body;
        if (eventModel.removeRegistrant(eventId, registrant)) {
            res.send('success');
        }
        res.status(404).send('Registrant with name ' + registrant.name + ' not found on this event!');

    });
}