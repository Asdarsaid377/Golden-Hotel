import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Kamar = db.define('kamar', {
  id_kamar: {
    type: DataTypes.INTEGER
  },
  nama_kamar: {
    type: DataTypes.STRING
  },
  foto: {
    type: DataTypes.STRING
  },
  deskripsi: {
    type: DataTypes.TEXT
  },
  harga: {
    type: DataTypes.INTEGER
  },
  jumlah_kamar: {
    type: DataTypes.INTEGER
  }
}, {
  FreezeTableName: true
})

export default Kamar
