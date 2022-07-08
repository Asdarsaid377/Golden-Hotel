import Namabank from "../models/namabankmodel.js"


export const getNamabank = async (req, res) => {
     try {
          const response = await Namabank.findAll();
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}
export const getNamabankById = async (req, res) => {
     try {
          const response = await Namabank.findOne({
               where: {
                    kode_bank: req.params.kode_bank
               }

          })
          res.status(200).json(response)
     } catch (error) {

     }
}

export const addNamabank = async (req, res) => {
     const { kode_bank = "", nomor_rekening = "", atas_nama = "", nama_bank = "" } = req.body
     if (kode_bank == "" || nomor_rekening == "" || atas_nama == "" || nama_bank == "") {
          res.status(400).json({ msg: "Lengkapi Data" })
     }
     try {
          await Namabank.create(req.body)
          res.status(200).json({ msg: "Tambah Metode Pembayaran Berhasil" })
     } catch (error) {

     }
}

export const updateNamabank = async (req, res) => {
     try {
          await Namabank.update(req.body, {
               where: {
                    kode_bank: req.params.kode_bank
               }
          })
          res.status(200).json({ msg: "Metode Pembayaran Berhasi Diupdate" })
     } catch (error) {

     }
}

export const deleteNamabank = async (req, res) => {
     try {
          await Namabank.destroy({
               where: {
                    kode_bank: req.params.kode_bank
               }
          })
          res.status(200).json({ msg: "Metode Pembayaran Berhasil Dihapus" })
     } catch (error) {

     }
}