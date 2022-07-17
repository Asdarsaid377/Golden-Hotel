import sequelize from "sequelize"
import db from "../database/config.js";

const { DataTypes } = sequelize;
const Users = db.define('users', {
     name: {
          type: DataTypes.STRING
     },
     email: {
          type: DataTypes.STRING
     },
     rule: {
          type: DataTypes.STRING
     },
     password: {
          type: DataTypes.TEXT
     },
     refresh_token: {
          type: DataTypes.TEXT
     }
}, {
     FreezeTableName: true
})

// Users.sync(); 

export default Users
