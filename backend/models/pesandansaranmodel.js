import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Pesan = db.define('pesan', {
  id_tamu: {
    type: DataTypes.INTEGER
  },
  nama: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  komentar: {
    type: DataTypes.TEXT
  },
  waktu: {
    type: DataTypes.DATE
  }
}, {
  FreezeTableName: true
})

export default Pesan
