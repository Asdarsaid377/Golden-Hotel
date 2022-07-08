import Reservasi from "../models/reservasimodel.js"


export const getReservasi = async (req, res) => {
     try {
          const response = await Reservasi.findAll();
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}
export const getReservasiById = async (req, res) => {
     try {
          const response = await Reservasi.findOne({
               where: {
                    id_reservasi: req.params.id_reservasi
               }

          })
          res.status(200).json(response)
     } catch (error) {

     }
}

export const addReservasi = async (req, res) => {
     const { id_reservasi = "", id_kamar = "", id_membertamu = "", id_tamu = "", id_hotel = "", tgl_reservasi = "", tgl_cekin = "", tgl_cekout = "", jml_pesan = "", harga = "", total = "" } = req.body
     if (id_reservasi == "" || id_kamar == "" || id_membertamu == "" || id_tamu == "" || id_hotel == "" || tgl_reservasi == "" || tgl_cekin == "" || tgl_cekout == "" || jml_pesan == "" || harga == "" || total == "") {
          res.status(400).json({ msg: "Lengkapi Data Reservasi" })
     }
     try {
          await Reservasi.create(req.body)
          res.status(200).json({ msg: "Reservasi Berhasil" })
     } catch (error) {

     }
}

export const updateReservasi = async (req, res) => {
     try {
          await Reservasi.update(req.body, {
               where: {
                    id_reservasi: req.params.id_reservasi
               }
          })
          res.status(200).json({ msg: "Data Reservasi Berhasil Di update" })
     } catch (error) {

     }
}

export const deleteReservasi = async (req, res) => {
     try {
          await Reservasi.destroy({
               where: {
                    id_reservasi: req.params.id_reservasi
               }
          })
          res.status(200).json({ msg: "Data Reservasi Berhasil Dihapus" })
     } catch (error) {

     }
}