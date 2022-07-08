import Kamar from "../models/kamarmodel.js"

export const getKamar = async (req, res) => {
     try {
          const response = await Kamar.findAll();
          res.status(200).json(response);
     } catch (error) {
          console.log(error.message);
     }
}
export const getKamarById = async (req, res) => {
     try {
          const response = await Kamar.findOne({
               where: {
                    id_kamar: req.params.id_kamar
               }
          });
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}

export const addKamar = async (req, res) => {
     const { id_kamar = "", nama_kamar = "", foto = "", deskripsi = "", harga = "", jumlah_kamar = "" } = req.body
     if (id_kamar == "" || nama_kamar == "" || foto == "" || deskripsi == "", harga == "", jumlah_kamar == "") {
          res.status(400).json({ msg: "Lengkapi Data" })
     }
     try {
          await Kamar.create(req.body)
          res.status(200).json({ msg: "Kamar Created" })
     } catch (error) {
          console.log(error.message);
     }
}

export const updateKamar = async (req, res) => {
     try {
          await Kamar.update(req.body, {
               where: {
                    id_kamar: req.params.id_kamar
               }
          })
          res.status(200).json({ msg: "Kamar Update" });
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}

export const deleteKamar = async (req, res) => {
     try {
          await Kamar.destroy({
               where: {
                    id_kamar: req.params.id_kamar
               }
          })
          res.status(200).json({ msg: "Kamar Deleted" });
     } catch (error) {
          console.log(error.message);
     }
}