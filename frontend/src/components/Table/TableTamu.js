import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { BsTrash, BsCalendar3 } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import React, { useRef } from 'react';
import DatePicker, { Calendar } from 'react-multi-date-picker';
export default function CardTable() {
    const datePickerRef = useRef(null);

    return (
        <Card >
            <CardHeader color="blue" contentPosition="left">
                <h2 className="text-white text-2xl font-semibold">Tamu</h2>
            </CardHeader>
            <div className='items-center gap-3 justify-items-start flex p-3'>
                <span>Tanggal Chekin</span>
                <DatePicker ref={datePickerRef}>
                    <button
                        style={{ margin: "2px", color: "red" }}
                        onClick={() => datePickerRef.current.closeCalendar()}
                    >
                        close
                    </button>
                </DatePicker>
                <span>Tanggal Chekout</span>
                <DatePicker ref={datePickerRef}>
                    <button
                        className='border-none'
                        style={{ margin: "2px", color: "red" }}
                        onClick={() => datePickerRef.current.closeCalendar()}
                    >
                        close
                    </button>
                </DatePicker>
                <a href='/formtamu'>
                    <button to="/asjdkadsjksajd" className="text-white justify-end flex ml-12 p-2 just rounded-lg border-none bg-purple-500 hover:bg-blue-700"> Add Tamu</button>
                </a>
            </div>
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
                                    <button type='button' onClick={() => { if (window.confirm('Apakah Anda yakin menghapus ini?')); }}><BsTrash color='red' /></button>
                                    <button type='button'><BiEdit color='green' /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card >
    );
}
