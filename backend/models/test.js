import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Tes = db.define('tes', {
  id_tamu: {
    type: DataTypes.INTEGER
  },
  nama: {
    type: DataTypes.STRING
  },
  alamat: {
    type: DataTypes.STRING
  }
}, {
  FreezeTableName: true
})

// Tes.sync()
export default Tes
