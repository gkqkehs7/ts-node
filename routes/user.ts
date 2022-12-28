import express, { Router } from "express";
import bcrypt from "bcrypt";
import passport from "passport";

import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";
const router = express.Router();

// get함수에 들어있기떄문에, 여기서 req, res는 타입을 설정하지 않아도 된다.
router.get("/", isLoggedIn, (req, res) => {
  // isLoggedIn을 통과할면 무조건 req.user가 잇어야하지만 ts는 알아차리지 못함
  const user = JSON.parse(JSON.stringify(req.user!)); // req.user!.toJSON() as User;
  delete user.password;
  return res.json(user);
});
