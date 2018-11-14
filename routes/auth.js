const express = require("express");
const UserInfo = require("../model/userinfo");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/AccountCreate",(req, res, next) =>{
    UserInfo.findOne({email: req.body.email}, (err, existingUserInfo) =>{
        if(err){
            res.status(500);
            return next(err);
        }else if(existingUserInfo !== null){
            res.status(400);
            return next(new Error("That e-mail has already been used. Please provide a different e-mail address."))
        }
        const newUserInfo = new UserInfo(req.body);
        newUserInfo.save((err, userinfo) =>{
            if(err){
                res.status(500);
                return next(err)
            }

            return res.status(201).send({userinfo: userinfo.toObject()})
        })
    })
});

authRouter.post("/Login", (req, res, next) =>{
    UserInfo.findOne({email: req.body.semail.toLowerCase()}, (err,userinfo) =>{
        if(err){
            res.status(500)
            return next(err);
        }else if(!userinfo || userinfo.password !== req.body.password){
            res.status(403);
            return next(new Error("Email or Password are incorrect please check them and try again."))
        }
        const token = jwt.sign(userinfo.toObject(), process.env.SECRET);
        return res.send({userinfo: userinfo.toObject(), token})
    })
});

module.exports = authRouter;
