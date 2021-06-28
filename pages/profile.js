import React, { useState } from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import Header from '../components/cards/Header';
import MainLayout from '../components/MainLayout';
import Main from '../components/profile/Main';
import LoginModal from '../components/auth/LoginModal';
import { firebaseAdmin } from '../firebase/firebaseAdmin';
import '../styles/Profile.module.scss'

export default function Profile({orders}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [modalStat, setModalStat] = useState('');

  const openModal = (stat) => {
    setIsOpen(!isOpen);
    setModalStat(stat);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MainLayout title={'Cachy - Profile'}>
      <Header openModal={openModal} />
      <Main orders={orders} />
      <LoginModal openModal={toggleModal} isOpen={isOpen} modalStat={modalStat} />
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;

    // get orders from firestore
    const firestore = firebaseAdmin.firestore();

    let snapshot;

    if (['anastasia@soundeon.io', 'anastasia@soundeon.com'].includes(email)) {
      snapshot = await firestore
                              .collection('orders')
                              .orderBy('updatedAt', 'desc')
                              .get();
    } else {
      snapshot = await firestore
                              .collection('orders')
                              .where('customerEmail', '==', email)
                              .orderBy('updatedAt', 'desc')
                              .get();
    }
    
    const orders = snapshot.docs.map(doc => {
      return { ...doc.data(), orderId: doc.id }
    });

    return {
      props: { orders: JSON.parse(JSON.stringify(orders)) },
    };
  } catch (err) {
    console.log(err)
    return {
      props: { orders: []},
    };
  }
};
