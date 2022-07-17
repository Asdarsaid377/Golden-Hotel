import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Namabank = db.define('bank', {
  kode_bank: {
    type: DataTypes.INTEGER
  },
  nomor_rekening: {
    type: DataTypes.INTEGER
  },
  atas_nama: {
    type: DataTypes.STRING
  },
  nama_bank: {
    type: DataTypes.STRING
  }
}, {
  FreezeTableName: true
})

// Namabank.sync();
export default Namabank
