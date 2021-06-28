import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import OrderItem from './OrderItem';
import AdminOrderItem from './AdminOrderItem';

export default function Orders({ orders }) {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [tabActive, setTabActive] = useState(1);
  let tabs = ['placed', 'accepted', 'finished', 'pending'];

  useEffect(() => {
    if (user && ['toptaldev123@gmail.com', 'anastasia@soundeon.com'].includes(user.email)) {
      setIsAdmin(true);
    }
  }, [user])

  if (tabActive === 2) {
    tabs = ['placed']
  } else if (tabActive === 3) {
    tabs = ['finished']
  }

  return (
    <div className="orders">
      {
        orders && orders.length > 0
          ?
          <>
            <div className="tabs">
              <button className={`orders-tab ${tabActive === 1 ? "active" : ""}`} onClick={() => setTabActive(1)}>All orders</button>
              <button className={`orders-tab ${tabActive === 2 ? "active" : ""}`} onClick={() => setTabActive(2)}>Order placed</button>
              <button className={`orders-tab ${tabActive === 3 ? "active" : ""}`} onClick={() => setTabActive(3)}>Order completed</button>
            </div>
            <div className="order-list">
              {
                orders && isAdmin &&
                orders.map((order, index) => <AdminOrderItem key={index} order={order} tabs={tabs} />)
              }
              {
                orders && !isAdmin &&
                orders.map((order, index) => <OrderItem key={index} order={order} tabs={tabs} />)
              }
            </div>
          </>
          :
          <div className="no-orders">
            Discover Artists and Book your Personalized Music Video
        </div>
      }
    </div>
  )
}