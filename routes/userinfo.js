const express = require('express');
const {Router} = express;
const multer = require('multer');
const path = require ('path');

// Routes

const UserInfo = require('../model/userinfo');
const userInfoRouter = Router();

const upload = multer({
    dest: './temp',
    limits: {fileSize: 100000}
});

userInfoRouter.route('/')
    .get((req, res, next) =>{
        UserInfo.find({},req.query, (err, foundUserInfo) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(200).send(foundUserInfo)
        })
    })
    .put(upload.single('file'),(req,res,next)=>{
        req.body.filename = req.file.filename;
        const newUserInfo = new UserInfo(req.body);
        newUserInfo.save((err, savedUserInfo) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(201).send(savedUserInfo)
        })
    })
userInfoRouter.route('/:id')
    .get((res,req,next) =>{
        UserInfo.findById(req.params.id, (err, foundUserInfo) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(200).send(foundUserInfo)
        })
    })
    .delete((req,res) =>{
        UserInfo.findByIdAndDelete(req.params.id, (err, deleteUserinfo) =>{
            if(err){
                res.status(400)
                next(err)
            } else{
                res.status(204).send(deleteUserinfo)
            }
        })
    })
userInfoRouter.route("/img/:filename")
    .get((req,res,next) =>{
        res.sendFile(path.resolve(__dirname, `../temp/${req.params.filename}`))
    })

module.exports = userInfoRouter;