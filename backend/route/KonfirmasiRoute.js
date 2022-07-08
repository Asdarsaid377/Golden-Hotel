import { getKonfirmasi, getKonfirmasiById, addKonfirmasi, deleteKonfirmasi, updateKonfirmasi } from "../controller/KonfirmasiController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import express from "express"

const Konfirmasi = express.Router()

Konfirmasi.get("/konfirmasi", verifyToken, getKonfirmasi);
Konfirmasi.get("/konfirmasi/:id_konfirmasi", verifyToken, getKonfirmasiById);
Konfirmasi.post("/konfirmasi", verifyToken, addKonfirmasi);
Konfirmasi.patch("/konfirmasi/:id_konfirmasi", verifyToken, updateKonfirmasi);
Konfirmasi.delete("/konfirmasi/:id_konfirmasi", verifyToken, deleteKonfirmasi)

export default Konfirmasi;