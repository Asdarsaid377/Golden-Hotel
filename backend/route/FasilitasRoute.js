import { getFasilitas, addFasilitas, getFasilitasById, deleteFasilitas, updateFasilitas } from "../controller/FasilitasController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import express from "express";

const FasilitasRoute = express.Router();

FasilitasRoute.get("/fasilitas", verifyToken, getFasilitas);
FasilitasRoute.get("/fasilitas/:id_fasilitas", verifyToken, getFasilitasById);
FasilitasRoute.post("/fasilitas", verifyToken, addFasilitas);
FasilitasRoute.patch("/fasilitas/:id_fasilitas", verifyToken, updateFasilitas);
FasilitasRoute.delete("/fasilitas/:id_fasilitas", verifyToken, deleteFasilitas)

export default FasilitasRoute