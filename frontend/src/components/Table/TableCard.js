import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { BsTrash } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import React, { useState, useEffect } from "react"
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";


function CardTable() {
    const [token, setToken] = useState(' ');
    const [name, setName] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useHistory();
    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:5000/token");
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setName(decode.name);
            setExpire(decode.exp);
        } catch (error) {
            if (error.response) {
                navigate.push("/");
            }
        }
    }
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setName(decode.name)
            setExpire(decode.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    const Logout = async () => {
        try {
            await axios.delete("http://localhost:5000/logout");
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }
    const getUsers = async () => {
        try {
            const response = await axiosJWT.get("http://localhost:5000/users", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data);
        } catch (error) {

        }
    }
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
        refreshToken();
    }, []);
    // const [token, setToken] = useState(' ');
    // const [name, setName] = useState('');
    // const [expire, setExpire] = useState('');
    // const [users, setUsers] = useState([]);
    // const navigate = useHistory()

    // const refreshToken = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:5000/token");
    //         setToken(response.data.accessToken);
    //         const decode = jwt_decode(response.data.accessToken);
    //         setName(decode.name);
    //         setExpire(decode.exp);
    //     } catch (error) {
    //         if (error.response) {
    //             navigate.push("/");
    //         }
    //     }
    // }

    // const axiosJWT = axios.create();
    // axiosJWT.interceptors.request.use(async (config) => {
    //     const currentDate = new Date();
    //     if (expire * 1000 < currentDate.getTime()) {
    //         const response = await axios.get('http://localhost:5000/token');
    //         config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    //         setToken(response.data.accessToken);
    //         const decode = jwt_decode(response.data.accessToken);
    //         setName(decode.name)
    //         setExpire(decode.exp);
    //     }
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });

    // const getUsers = async () => {
    //     try {
    //         const response = await axiosJWT.get("http://localhost:5000/users");
    //         setUsers(response.data);
    //         console.log(response);
    //     } catch (error) {
    //     }
    // }

    // const deleteUser = async (id) => {
    //     try {
    //         await axios.delete(`http://localhost:5000/users/${id}`);
    //         getUsers();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(() => {
    //     getUsers();
    //     refreshToken();
    // }, []);
    return (

        <Card>
            <CardHeader color="purple" contentPosition="left"  >
                <h2 className="text-white text-2xl font-semibold justify-end"> User </h2>
                <button className='bg-blue-400'>Add User</button>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto ml-10 border-b items-center">
                    <table className="items-center w-full bg-transparent border-spacing-6 border-b border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Id
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Nama
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Email
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Role
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                users.map((user, index) => (
                                    <tr key={user.id}  >
                                        <td className="mt-16">{index + 1}</td>
                                        <td className="mt-16">{user.name}</td>
                                        <td className="mt-16">{user.email}</td>
                                        <td className="mt-16">{user.rule}</td>
                                        <td className='flex gap-5'>
                                            <button type='button' onClick={() => deleteUser(user.id)}><BsTrash color='red' /></button>
                                            <a href="/formuser"><BiEdit color='green' /></a>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* <tr className='border-spacing-8 border-b border-black'>
                                <td>1</td>
                                <td>Asdar</td>
                                <td>asdarsaid377@gmail.com</td>
                                <td>admin</td>
                                <td className='flex gap-5'> <a href=""><BsTrash /></a> <a href=""> <BiEdit /></a></td>
                            </tr>
                            <tr className=''>
                                <td>1</td>
                                <td>Asdar</td>
                                <td>asdarsaid377@gmail.com</td>
                                <td>admin</td>
                                <td className='flex gap-5'> <a href=""><BsTrash /></a> <a href=""> <BiEdit /></a></td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card >
    );
}

export default CardTable