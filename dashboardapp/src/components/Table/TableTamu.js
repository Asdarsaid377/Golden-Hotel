import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { BsTrash } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import ReactToPrint from 'react-to-print';
import React, { useRef } from 'react';
import About from 'pages/About';
import { Link } from 'heroicons-react';

export default function CardTable() {

    return (
        <Card >
            <CardHeader color="blue" contentPosition="center">
                <h2 className="text-white text-2xl font-semibold">Tamu</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto items-center">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead className='ml'>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Id_Tamu
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Nama
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Alamat
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    No Telpon
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    No Ktp
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Email
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    User Name
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Status Tamu
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-5'>1</td>
                                <td>Asdar</td>
                                <td>Bantaeng</td>
                                <td>0827384921374</td>
                                <td>726316237485903</td>
                                <td>asdarsaid377@gmail.com</td>
                                <td>Mr.Nobody377</td>
                                <td>Long Stay</td>
                                <td className='flex gap-5 p-5'>
                                    <button type='button'><BiEdit /></button>
                                    <button type='button' onClick={() => { if (window.confirm('Apakah Anda yakin menghapus ini?')); }}><BsTrash /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card >
    );
}
