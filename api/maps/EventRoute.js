const express = require('express');
const {EventDB, SessionDB} = require('../database/DBInstances.js');

const EventRouter = express.Router();

EventRouter.post('/add-or-edit-event', function (req, res){
    const {sessionId, data} = req.body;
    const sessionObj = SessionDB.getObject(sessionId);
    if(!!sessionObj){
        res.json({success: false});
    }else{
        res.json({
            success: true,
            newId: EventDB.save(data)
        });
    }
});

EventRouter.post('/delete-event', function (req, res){
    const {sessionId, id} = req.body;
    const sessionObj = SessionDB.getObject(sessionId);
    if(!!sessionObj){
        res.json({success: false});
    }else{
        res.json({
            success: EventDB.delete(id),
        });
    }
});

module.exports = {EventRouter};
