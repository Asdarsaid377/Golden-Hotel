import { addReservasi, getReservasi, getReservasiById, updateReservasi, deleteReservasi } from "../controller/ReservasiController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import express from "express"

const Reservasi = express.Router()

Reservasi.get("/reservasi", verifyToken, getReservasi);
Reservasi.get("/reservasi/:id_reservasi", verifyToken, getReservasiById);
Reservasi.post("/reservasi", addReservasi);
Reservasi.patch("/reservasi/:id_reservasi", verifyToken, updateReservasi);
Reservasi.delete("/reservasi/:id_reservasi", verifyToken, deleteReservasi);

export default Reservasi
