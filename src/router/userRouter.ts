import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import UserData from "../data/UserData";



export const userRouter = express.Router();

const userBusiness = new UserBusiness(
  new UserData()
);

const userController = new UserController(userBusiness);

userRouter.post("/confirm", userController.createUser);
userRouter.get("/confirm", userController.getUsers);