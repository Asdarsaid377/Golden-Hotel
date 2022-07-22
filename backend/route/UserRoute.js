import { getUsers, Register, deleteUsers, Login, Logout } from "../controller/UserController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";
import express from "express"

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.delete("/users/:id", deleteUsers)
router.post("/login", Login)
router.get("/token", refreshToken);
router.delete("/logout", Logout);


export default router
