import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Konfirmasi = db.define('konfirmasi', {
  id_konfirmasi: {
    type: DataTypes.INTEGER
  },
  id_reservasi: {
    type: DataTypes.STRING
  },
  nama_pengirim: {
    type: DataTypes.STRING
  },
  nama_bank: {
    type: DataTypes.STRING
  },
  norek: {
    type: DataTypes.INTEGER
  }, tgl_bayar: {
    type: DataTypes.DATE
  },
  keterangan: {
    type: DataTypes.STRING
  }
}, {
  FreezeTableName: true
})

export default Konfirmasi
