import { addTamu, getTamu, getTamuByIdTamu, updateTamu, deleteTamu } from "../controller/TamuController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import express from "express";

const Tamu = express.Router();

Tamu.get("/tamu", verifyToken, getTamu);
Tamu.get("/tamu/:id_tamu", verifyToken, getTamuByIdTamu);
Tamu.post("/tamu", verifyToken, addTamu);
Tamu.patch("/tamu/:id_tamu", verifyToken, updateTamu);
Tamu.delete("/tamu/:id_tamu", verifyToken, deleteTamu)

export default Tamu