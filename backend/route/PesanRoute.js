import { addPesan, getPesanByIdTamu, getPesan, updatePesan, deletePesan } from "../controller/PesanController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import express from "express";

const Pesan = express.Router();

Pesan.get("/pesan", verifyToken, getPesan);
Pesan.get("/pesan/:id_tamu", verifyToken, getPesanByIdTamu);
Pesan.post("/pesan", verifyToken, addPesan);
Pesan.patch("/pesan/:id_tamu", verifyToken, updatePesan);
Pesan.delete("/pesan/:id_tamu", verifyToken, deletePesan)

export default Pesan