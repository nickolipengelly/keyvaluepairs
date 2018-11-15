const express = require("express");
const { Router } = express;
const multer = require("multer");
const path = require("path");

// Routes

const UserInfo = require("../model/userinfo");
const userInfoRouter = Router();

//need to fix multer to upload files
const upload = multer({
  dest: "./temp",
  limits: { fileSize: 100000 }
});

userInfoRouter.route("/").get((req, res, next) => {
  // const userinfo = new UserInfo(req.body);
  // userinfo.email = req.userinfo._id
  UserInfo.find({ email: req.body.email }, req.query, (err, foundUserInfo) => {
    if (err) {
      res.status(400);
      next(err);
    } else res.status(200).send(foundUserInfo);
  });
});

//changing filename to avatar

userInfoRouter.put("/:_id", (req, res) => {
  req.body.avatar = req.file.avatar;
  UserInfo.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: true },
    (err, userinfo) => {
      if (err) return;
      console.log("put request error");
      res.status(500).send(err);
      return res.send(userinfo);
    }
  );
});

// const newUserInfo = new UserInfo(req.body);
// newUserInfo.save((err, savedUserInfo) =>{
//     if(err){
//         res.status(400)
//         next(err)
//     }
//     else res.status(201).send(savedUserInfo)

userInfoRouter
  .route("/:id")
  .get((res, req, next) => {
    UserInfo.findById(req.params.id, (err, foundUserInfo) => {
      if (err) {
        res.status(400);
        next(err);
      } else res.status(200).send(foundUserInfo);
    });
  })
  .delete((req, res) => {
    UserInfo.findByIdAndDelete(req.params.id, (err, deleteUserinfo) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(204).send(deleteUserinfo);
      }
    });
  });

userInfoRouter.route("/img/:filename").get((req, res) => {
  res.sendFile(path.resolve(__dirname, `../temp/${req.params.filename}`));
}),
  (module.exports = userInfoRouter);
