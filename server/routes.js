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

    app.post('/event/:id/addparticipant', function (req, res) {
        
        var eventId = req.params.id;
        var ev = eventModel.readEvent(eventId);
        if (!ev) {
            res.status(404).send('Event with id ' + id + ' not found!');
        }
        var participant = req.body;
        participant = eventModel.addParticipant(eventId, participant);

        res.json(participant);

    });

    app.post('/event/:id/removeparticipant', function (req, res) {
        var eventId = req.params.id;
        var ev = eventModel.readEvent(eventId);
        if (!ev) {
            res.status(404).send('Event with id ' + id + ' not found!');
        }
        var participant = req.body;
        if (eventModel.removeParticipant(eventId, participant)) {
            res.send('success');
        }
        res.status(404).send('Participant with name ' + participant.name + ' not found on this event!');

    });
}