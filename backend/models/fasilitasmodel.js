import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Fasilitas = db.define('fasilitas', {
  id_fasilitas: {
    type: DataTypes.INTEGER
  },
  fasilitas_hotel: {
    type: DataTypes.STRING
  },
  gambar: {
    type: DataTypes.TEXT
  }
}, {
  FreezeTableName: true
})

// Fasilitas.sync();
export default Fasilitas
