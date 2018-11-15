const express = require("express");
const UserInfo = require("../model/userinfo");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/AccountCreate", (req, res, next) => {
  UserInfo.findOne({ email: req.body.email }, (err, existingUserInfo) => {
    if (err) {
      res.status(500);
      return next(err);
    } else if (existingUserInfo !== null) {
      res.status(400);
      return next(
        new Error(
          "That e-mail has already been used. Please provide a different e-mail address."
        )
      );
    }
    const newUserInfo = new UserInfo(req.body);
    newUserInfo.save((err, userinfo) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(201).send({ userinfo: userinfo.withoutPassword() });
    });
  });
});

authRouter.post("/login", (req, res, next) => {
  UserInfo.findOne({ email: req.body.email.toLowerCase() }, (err, userInfo) => {
    if (userInfo === null) res.status(500).send("User not found");

    userInfo.checkPassword(req.body.password, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match)
        res.status(401).send({
          success: false,
          message:
            "Email or Password are incorrect please check them and try again."
        });
      const token = jwt.sign(userInfo.withoutPassword(), process.env.SECRET);
      return res.send({ userinfo: userInfo.withoutPassword(), token });
    });
  });
});

// const token = jwt.sign(userinfo.withoutPassword(), process.env.SECRET);
// return res.send({userinfo: userinfo.withoutPassword(), token})
// return res.send({userinfo: userinfo.toObject(), token})

module.exports = authRouter;
