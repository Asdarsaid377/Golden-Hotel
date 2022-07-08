import { getNamabank, getNamabankById, addNamabank, updateNamabank, deleteNamabank } from "../controller/NamabankController.js";
import { verifyToken } from "../middleware/VerivyToken.js";
import express from "express"

const Namabank = express.Router()

Namabank.get("/namabank", verifyToken, getNamabank);
Namabank.get("/namabank/:kode_bank", verifyToken, getNamabankById);
Namabank.post("/namabank", verifyToken, addNamabank);
Namabank.patch("/namabank/:kode_bank", verifyToken, updateNamabank);
Namabank.delete("/namabank/:kode_bank", verifyToken, deleteNamabank)

export default Namabank;