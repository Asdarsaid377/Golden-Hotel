import Tes from "../models/test.js";
import { base64encode } from "nodejs-base64";


export const getPesan = async (req, res) => {
  try {
    const response = await Tes.findAll();
    const decode = base64encode(JSON.stringify(response));
    res.status(200).json(decode)
  } catch (error) {
    console.log(error.message);
  }

}
export const getPesanByIdTamu = async (req, res) => {
  try {
    const response = await Tes.findOne({
      where: {
        id_tamu: req.params.id_tamu
      }

    })
    res.status(200).json(response)
  } catch (error) {

  }
}
export const addPesan = async (req, res) => {
  const { id_tamu = "", nama = "", alamat = "", } = req.body
  if (id_tamu == "" || nama == "" || alamat == "") {
    res.status(400).json({ msg: "Lengkapi Data" })
  }
  try {
    const a = await Tes.create({
      id_tamu: id_tamu,
      nama: nama,
      alamat: alamat
    });
    const decode = base64encode(JSON.stringify(a))
    res.status(200).json({ Data: decode });
  } catch (error) {
  }
}