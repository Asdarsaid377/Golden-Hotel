import express from "express"
import FasilitasRoute from "../route/FasilitasRoute.js"
import Kamar from "../route/KamarRoute.js";
import Konfirmasi from "../route/KonfirmasiRoute.js";
import Namabank from "../route/NamaBankRoute.js";
import Pesan from "../route/PesanRoute.js";
import Reservasi from "../route/ReservasiRoute.js"
import Tamu from "../route/TamuRoute.js";
import Tes from "../route/Tes.js";


export const semua = express();
semua.use(FasilitasRoute);
semua.use(Kamar);
semua.use(Konfirmasi);
semua.use(Namabank);
semua.use(Pesan);
semua.use(Reservasi);
semua.use(Tamu);
semua.use(Tes);
