import { getKamar, getKamarById, addKamar, deleteKamar, updateKamar } from "../controller/KamarController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import express from "express"

const Kamar = express.Router()

Kamar.get("/kamar", verifyToken, getKamar);
Kamar.get("/kamar/:id_kamar", verifyToken, getKamarById);
Kamar.post("/kamar", verifyToken, addKamar);
Kamar.patch("/kamar/:id_kamar", verifyToken, updateKamar);
Kamar.delete("/kamar/:id_kamar", verifyToken, deleteKamar);

export default Kamar
