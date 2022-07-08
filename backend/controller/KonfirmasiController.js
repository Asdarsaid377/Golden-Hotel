import Konfirmasi from "../models/konfirmasimodel.js"


export const getKonfirmasi = async (req, res) => {
     try {
          const response = await Konfirmasi.findAll();
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}
export const getKonfirmasiById = async (req, res) => {
     try {
          const response = await Konfirmasi.findOne({
               where: {
                    id_konfirmasi: req.params.id_konfirmasi
               }

          })
          res.status(200).json(response)
     } catch (error) {

     }
}

export const addKonfirmasi = async (req, res) => {
     const { id_konfirmasi = "", id_reservasi = "", nama_pengirim = "", nama_bank = "", norek = "", tgl_bayar = "", keterangan = "" } = req.body
     if (id_konfirmasi == "" || id_reservasi == "" || nama_pengirim == "" || nama_bank == "" || norek == "" || tgl_bayar == "" || keterangan == "") {
          res.status(400).json({ msg: "Lengkapi Data Konfirmasi" })
     }
     try {
          await Konfirmasi.create(req.body)
          res.status(200).json({ msg: "Konfirmasi Berhasil" })
     } catch (error) {

     }
}

export const updateKonfirmasi = async (req, res) => {
     try {
          await Konfirmasi.update(req.body, {
               where: {
                    id_konfirmasi: req.params.id_konfirmasi
               }
          })
          res.status(200).json({ msg: "Data Berhasil Di update" })
     } catch (error) {

     }
}

export const deleteKonfirmasi = async (req, res) => {
     try {
          await Konfirmasi.destroy({
               where: {
                    id_konfirmasi: req.params.id_konfirmasi
               }
          })
          res.status(200).json({ msg: "Data Berhasil Dihapus" })
     } catch (error) {

     }
}