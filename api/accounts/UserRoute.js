const express = require('express');
const {UserDB, SessionDB} = require('../database/DBInstances.js');

const UserRouter = express.Router();

// UserRouter.post("new", (req, res)=>{
//     const {username, password, email} = req.body;
//     UserDB.save({username, password, email});
//     res.json();
// });

UserRouter.post("/login", (req, res)=>{
    const {username, password} = req.body;
    const user = UserDB.getObject(username);
    console.log(user);
    if(!!user && user.password === password){
        res.json(
            {
                sessionId: SessionDB.save({username}),
                success: true,
            }
        );
    }else{
        res.json(
            {
                success: false,
            }
        );
    }
});

UserRouter.post("/", (req, res)=>{res.json({h: 12})})

UserRouter.post("/logout", (req, res)=>{
    const {sessionId} = req.body;
    res.json(
        {
            success: SessionDB.delete(sessionId),
        }
    );
});

module.exports = {UserRouter};
