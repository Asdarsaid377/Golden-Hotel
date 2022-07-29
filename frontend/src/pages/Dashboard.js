import StatusCard from 'components/StatusCard';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import Sidebar from 'components/Sidebar';
import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Dashboard() {
    const [token, setToken] = useState([]);
    const [name, setName] = useState('');
    const [expire, setExpire] = useState('');
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

    useEffect(() => {
        refreshToken();
    }, []);
    return (
        <>
            <Sidebar />
            <div className="md:ml-60">
                <div className="bg-light-blue-500 px-3 md:px-8 h-16" />
                <div className="px-3 md:px-8">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                            <StatusCard
                                color="pink"
                                icon="trending_up"
                                title="Traffic"
                                amount="350,897"
                                percentage="3.48"
                                percentageIcon="arrow_upward"
                                percentageColor="green"
                                date="Since last month"
                            />
                            <StatusCard
                                color="orange"
                                icon="groups"
                                title="New Users"
                                amount="2,356"
                                percentage="3.48"
                                percentageIcon="arrow_downward"
                                percentageColor="red"
                                date="Since last week"
                            />
                            <StatusCard
                                color="purple"
                                icon="paid"
                                title="Sales"
                                amount="924"
                                percentage="1.10"
                                percentageIcon="arrow_downward"
                                percentageColor="orange"
                                date="Since yesterday"
                            />
                            <StatusCard
                                color="blue"
                                icon="poll"
                                title="Performance"
                                amount="49,65%"
                                percentage="12"
                                percentageIcon="arrow_upward"
                                percentageColor="green"
                                date="Since last month"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 xl:grid-cols-5">
                            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                                <PageVisitsCard />
                            </div>
                            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                                <TrafficCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
