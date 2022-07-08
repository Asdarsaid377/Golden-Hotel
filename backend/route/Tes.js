import { getPesan, addPesan } from "../controller/testencrypt.js"
import express from "express";

const Tes = express.Router();
Tes.get("/tes", getPesan);
Tes.post("/tes", addPesan)

export default Tes