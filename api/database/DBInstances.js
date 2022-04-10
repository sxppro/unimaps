const {GenericDB} = require("./GenericDB.js");
const path = require('path');

const EventDB = new GenericDB(path.resolve(__dirname, 'Event.json'));
const MapDB = new GenericDB(path.resolve(__dirname, 'Map.json'));
const UserDB = new GenericDB(path.resolve(__dirname, 'User.json'));
const SessionDB = new GenericDB(path.resolve(__dirname, 'Session.json'));

module.exports = {
    EventDB, MapDB, UserDB, SessionDB
};