import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';
import Orders from './Orders';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { apiURL } from '../../config';

export default function Main({ orders }) {
    const router = useRouter();
    const [activeTab, setactiveTab] = useState('#orders');
    const [totalOrders, setTotalOrders] = useState(orders)

    let sessionid = '';
    if (typeof window !== 'undefined') {
        sessionid = localStorage.getItem('sessionid');
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && location.hash) {
            setactiveTab(location.hash);
        }
    }, [])

    useEffect(() => {
        if (router.query.success === 'true' && sessionid) {
            // retrieve a session and create order field on firestore
            axios.post(`${apiURL}/retrieve-session`, { session_id: sessionid })
                .then(result => {
                    console.log(result.data)
                    if (!result.data.error) {
                        toast.success("Your order successfully placed!")
                        setTotalOrders([result.data.createdOrder, ...totalOrders])
                    } else {
                        toast.warn("We are sorry, Something went wrong. Contact to website admin!")
                    }
                })
                .catch(err => {
                    console.log(err)
                });

            localStorage.removeItem('sessionid')
        }
    }, [router.query])

    return (
        <main className="profilePage">
            <div className="container">
                <h1 className="title">{activeTab === '#orders' ? 'Orders' : 'Profile Information'}</h1>
                <div className="content-wrapper">
                    <div className="sidebar">
                        <button className={activeTab === '#orders' ? 'active' : ''} onClick={() => setactiveTab('#orders')}>Orders</button>
                        <button className={activeTab === '#profileinfo' ? 'active' : ''} onClick={() => setactiveTab('#profileinfo')}>Profile Infomation</button>
                    </div>
                    <div className="content">
                        <div className="order-content" style={activeTab !== '#orders' ? { display: "none" } : { display: "" }}>
                            <Orders orders={totalOrders} />
                        </div>
                        <div className="profile-content" style={activeTab !== '#profileinfo' ? { display: "none" } : { display: "" }}>
                            <ProfileInfo />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
