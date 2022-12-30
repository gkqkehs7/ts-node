import express, { Router } from "express";
import bcrypt from "bcrypt";
import passport from "passport";

import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";
const router = express.Router();

// get함수에 들어있기떄문에, 여기서 req, res는 타입을 설정하지 않아도 된다.
router.get("/", isLoggedIn, (req, res) => {
  // isLoggedIn을 통과할면 무조건 req.user가 잇어야하지만 ts는 알아차리지 못함
  const user = req.user;
  delete user.password;
  return res.json(user);
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

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session!.destroy(() => {
    res.send("logout 성공");
  });
});
