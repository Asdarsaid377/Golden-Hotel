import Users from "../models/usermodel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
// import { base64encode } from "nodejs-base64";

export const getUsers = async (req, res) => {
     try {
          const users = await Users.findAll({
               attributes: ['id', 'name', 'email', 'rule', 'createdAt']
          });
          res.json(users)
     } catch (error) {
          console.log(error);
     }
}

export const deleteUsers = async (req, res) => {
     try {
          await Users.destroy({
               where: {
                    id: req.params.id
               }
          })
          res.status(200).json({ msg: "Pesan Berhasil Dihapus" })
     } catch (error) {
          console.log("Tidak Bisa Menghapus Users")
     }
}

export const Register = async (req, res) => {
     const { name = "", email = "", password = "", confirmpassword = "", rule = "" } = req.body
     if (name == "") return res.status(400).json({ msg: "Nama Harus Di Isi " })
     if (email == "") return res.status(400).json({ msg: "Email Harus Di Isi " })
     // if (rule == "") return res.status(400).json({ msg: "Rule Harus Di Isi " })
     if (password == "") return res.status(400).json({ msg: "Password Harus Di Isi " })
     if (password !== confirmpassword) return res.status(400).json({ msg: "Pass Tidak Cocok " })
     const salt = await bcrypt.genSalt();
     const hashPassword = await bcrypt.hash(password, salt);
     try {
          await Users.create({
               name: name,
               email: email,
               password: hashPassword,
               rule: rule
          })
          res.json({ msg: "Berhasil Register" })
     } catch (error) {
          console.log(error);
     }
}

export const Login = async (req, res) => {
     try {
          const user = await Users.findAll({
               where: {
                    email: req.body.email
               }
          });
          const match = await bcrypt.compare(req.body.password, user[0].password);
          if (!match) return res.status(400).json({ msg: "Password Salah " });
          const userId = user[0].id
          const name = user[0].name
          const email = user[0].email
          const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
               expiresIn: '1d'
          });
          // const encode = base64encode(JSON.stringify(accessToken))
          // res.status(200).json({ Data: encode });


          const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
               expiresIn: '1d'
          });
          await Users.update({ refresh_token: refreshToken }, {
               where: {
                    id: userId
               }
          });
          res.cookie('refreshToken', refreshToken, {
               httpOnly: true,
               maxAge: 24 * 60 * 60 * 1000
          });
          res.json({ accessToken })
     } catch (error) {
          res.status(404).json({ msg: "Email Tidak Ditemukan" });
     }
}

export const Logout = async (req, res) => {
     const refreshToken = req.cookies.refreshToken;
     const user = await Users.findAll({
          where: {
               refresh_token: refreshToken
          }
     });
     const userId = user[0].id;
     await Users.update({ refresh_token: null }, {
          where: {
               id: userId
          }
     });
     res.clearCookie('refreshToken');
     return res.sendStatus(200);
}