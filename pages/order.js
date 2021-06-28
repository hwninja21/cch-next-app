import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Header from '../components/cards/Header';
import MainLayout from '../components/MainLayout';
import Main from '../components/order/Main';
import LoginModal from '../components/auth/LoginModal';
import '../styles/Order.module.scss'

export default function Order() {
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
    <MainLayout title={'Cachy - Check out your personalized video'}>
      <NextSeo noindex={true} />
      <Header openModal={openModal} />
      <Main />
      <LoginModal openModal={toggleModal} isOpen={isOpen} modalStat={modalStat} />
    </MainLayout>
  )
}