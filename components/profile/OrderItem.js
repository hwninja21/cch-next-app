import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderItem({ order, tabs }) {

  let orderStatusClass = '';
  let orderStatusString = '';

  switch (order.status) {
    case 'finished':
      orderStatusClass = 'order-status finished'
      orderStatusString = 'Your personalized music performance is ready'
      break;

    case 'placed':
      orderStatusClass = 'order-status accept'
      orderStatusString = 'Your order is placed.'
      break;

    case 'pending':
      orderStatusClass = 'order-status pending'
      orderStatusString = 'Your music video is on way.'
      break;

    case 'accepted':
      orderStatusClass = 'order-status accepted'
      orderStatusString = 'Your order has accepted.'

    default:
      break;
  }

  return (
    <>
      {
        tabs.includes(order.status) ?
          <div className="order-item">
            {
              order.videoURL && order.status === 'finished' ?
                <Link href={{ pathname: '/order', query: { orderId: order.orderId } }}>
                  <a>
                    <div className="order-image">
                      <img src={order.orderImage} alt="" />
                      <div className="play-icon">
                        <svg width="106" height="107" viewBox="0 0 106 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M103.647 53.9141C103.647 82.406 80.8026 105.475 52.6564 105.475C24.5103 105.475 1.66565 82.406 1.66565 53.9141C1.66565 25.4222 24.5103 2.35275 52.6564 2.35275C80.8026 2.35275 103.647 25.4222 103.647 53.9141Z"
                            stroke="white" strokeWidth="3" />
                          <path d="M39.8408 31.9509L76.7631 53.9141L39.8408 75.8773L39.8408 31.9509Z" stroke="white" strokeWidth="3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </Link>
                :
                <div className="order-image">
                  <img src={order.orderImage} alt="" />
                </div>
            }
            <p className={orderStatusClass}>
              &#11044;&nbsp;&nbsp;&nbsp;
        {orderStatusString}
            </p>
            <h4 className="artist">{order.title}</h4>
          </div>
          :
          null
      }
    </>
  )
}