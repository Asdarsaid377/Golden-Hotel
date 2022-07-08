import Pesan from "../models/pesandansaranmodel.js"


export const getPesan = async (req, res) => {
     try {
          const response = await Pesan.findAll();
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}
export const getPesanByIdTamu = async (req, res) => {
     try {
          const response = await Pesan.findOne({
               where: {
                    id_tamu: req.params.id_tamu
               }

          })
          res.status(200).json(response)
     } catch (error) {

     }
}

export const addPesan = async (req, res) => {
     const { id_tamu = "", nama = "", email = "", komentar = "", waktu = "" } = req.body
     if (id_tamu == "" || nama == "" || email == "" || komentar == "" || waktu == "") {
          res.status(400).json({ msg: "Lengkapi Data" })
     }
     try {
          await Pesan.create(req.body)
          res.status(200).json({ msg: "Terima Kasih" })
     } catch (error) {

     }
}

export const updatePesan = async (req, res) => {
     try {
          await Pesan.update(req.body, {
               where: {
                    id_tamu: req.params.id_tamu
               }
          })
          res.status(200).json({ msg: "Pesan Berhasil Diubah" })
     } catch (error) {

     }
}

export const deletePesan = async (req, res) => {
     try {
          await Pesan.destroy({
               where: {
                    id_tamu: req.params.id_tamu
               }
          })
          res.status(200).json({ msg: "Pesan Berhasil Dihapus" })
     } catch (error) {

     }
}