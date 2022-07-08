import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Tamu = db.define('tamu', {
  id_tamu: {
    type: DataTypes.INTEGER
  },
  nama: {
    type: DataTypes.STRING
  },
  alamat: {
    type: DataTypes.STRING
  },
  no_telpon: {
    type: DataTypes.INTEGER
  },
  no_ktp: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.TEXT
  },
  status_tamu: {
    type: DataTypes.STRING
  }
}, {
  FreezeTableName: true
})

export default Tamu
