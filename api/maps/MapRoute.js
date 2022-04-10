const express = require('express');
const {MapDB, EventDB} = require('../database/DBInstances.js');

const MapRouter = express.Router();

MapRouter.post('/all-default-map-events', function (req, res) {
    const map = MapDB.getObject('default');
    res.json(
        {
            events: map.events.map((id)=>EventDB.getObject(id))
        }
    );
})

module.exports = {MapRouter};
