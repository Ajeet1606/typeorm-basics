import express from "express";
import { deleteUser, getUserById, getUsers, createUser, updateUser } from "../controllers/user";

const router = express.Router();

router.get("/home", createUser);
router.get("/users", getUsers)
router.get("/user/:id", getUserById)
router.post("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

export {router};