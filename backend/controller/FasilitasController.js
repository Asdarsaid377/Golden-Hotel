import Fasilitas from "../models/fasilitasmodel.js";

export const getFasilitas = async (req, res) => {
     try {
          const response = await Fasilitas.findAll();
          res.status(200).json(response);
     } catch (error) {
          console.log(error.message);
     }
}
export const getFasilitasById = async (req, res) => {
     try {
          const response = await Fasilitas.findOne({
               where: {
                    id_fasilitas: req.params.id_fasilitas
               }
          });
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}

export const addFasilitas = async (req, res) => {
     const { id_fasilitas = "", fasilitas_hotel = "", gambar = "" } = req.body
     if (id_fasilitas == "" || fasilitas_hotel == "" || gambar == "") {
          res.status(400).json({ msg: "Lengkapi Data" })
     }
     try {
          await Fasilitas.create(req.body)
          res.status(200).json({ msg: "Fasilitas Created" })
     } catch (error) {
          console.log(error.message);
     }
}

export const updateFasilitas = async (req, res) => {
     try {
          await Fasilitas.update(req.body, {
               where: {
                    id_fasilitas: req.params.id_fasilitas
               }
          })
          res.status(200).json({ msg: "Fasilitas Update" });
          res.status(200).json(response)
     } catch (error) {
          console.log(error.message);
     }
}

export const deleteFasilitas = async (req, res) => {
     try {
          await Fasilitas.destroy({
               where: {
                    id_fasilitas: req.params.id_fasilitas
               }
          })
          res.status(200).json({ msg: "Fasilitas Deleted" });
     } catch (error) {
          console.log(error.message);
     }
}