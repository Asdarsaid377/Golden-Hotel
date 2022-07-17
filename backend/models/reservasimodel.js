import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Reservasi = db.define('reservasi', {
  id_reservasi: {
    type: DataTypes.INTEGER
  },
  id_kamar: {
    type: DataTypes.INTEGER
  },
  id_membertamu: {
    type: DataTypes.INTEGER
  },
  id_tamu: {
    type: DataTypes.INTEGER
  },
  id_hotel: {
    type: DataTypes.INTEGER
  },
  tgl_reservasi: {
    type: DataTypes.DATE
  },
  tgl_cekin: {
    type: DataTypes.DATE
  },
  tgl_cekout: {
    type: DataTypes.DATE
  },
  jml_pesan: {
    type: DataTypes.INTEGER
  },
  harga: {
    type: DataTypes.INTEGER
  },
  total: {
    type: DataTypes.INTEGER
  }
}, {
  FreezeTableName: true
})
// Reservasi.sync()

export default Reservasi
