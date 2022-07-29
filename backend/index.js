import express from "express"
import db from "./database/config.js";
import router from "./route/UserRoute.js";
import { semua } from "./route/AllRoute.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.NODE_LOCAL_PORT;
try {
    db.authenticate();
    console.log('Database Connected');
    // await Pesan.sync(); //Pembuatan Table Dengan Sequalize
} catch (error) {
    console.log(error.message);
}


app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); //Akses Cors ke frontend
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(semua);

app.listen(port, () => console.log(`Server Running on port:${port} \nhttp://localhost:${port}`));