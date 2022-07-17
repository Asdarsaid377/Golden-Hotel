import sequelize from "sequelize";
// import dotenv from "dotenv"
// dotenv.config()

const db = new sequelize("login_db", "root", "", {
     host: "localhost",
     dialect: 'mysql'
})
export default db;