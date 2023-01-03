import express, { Router } from "express";
import bcrypt from "bcrypt";
import passport from "passport";

import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";
const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  const user = req.decodeuser;
  const session = req.secret;
  console.log(user?.password);
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate(
    "local",
    (err: Error, user: User, info: { message: string }) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.message);
      }
      return req.login(user, async (loginErr: Error) => {
        try {
          if (loginErr) {
            return next(loginErr);
          }
        } catch (e) {
          console.error(e);
          return next(e);
        }
      });
    }
  )(req, res, next);
});

// router.post("/logout", isLoggedIn, (req, res) => {
//   req.logout();
//   req.session!.destroy(() => {
//     res.send("logout 성공");
//   });
// });
