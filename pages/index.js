import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from "../components/MainLayout";
import Header from "../components/main/Header";
import Main from "../components/main/Main";
import "../styles/Home.module.scss";
import LoginModal from '../components/auth/LoginModal';

const Home = ({ data }) => {
  const router = useRouter();
  const { cardsCollection: { items: cards } } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [modalStat, setModalStat] = useState('');
  const [formRef, setFormRef] = useState(null);
  const [userEmail, setUserEmail] = useState('')

  const openModal = (stat, ref, email) => {
    setIsOpen(!isOpen);
    setModalStat(stat);

    if (ref) setFormRef(ref);
    if (email) setUserEmail(email);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MainLayout title={"Cachy –  Personalized Musical Performance"}>
      <Header openModal={openModal} />
      <Main cards={cards} openModal={openModal} />
      <LoginModal openModal={toggleModal} isOpen={isOpen} modalStat={modalStat} formRef={formRef} userEmail={userEmail} />
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `{ 
          cardsCollection {
            items {
              id
              title
              genres
              price
              covers
              poster {
                title
                fileName
                url
                width
                height
              }
              flowplayerurl
              mainImage {
                title
                fileName
                url
                width
                height
              }
            } 
          }
        }`,
      }),
    }
  )

  const data = await res.json();

  return {
    props: data,
  };
}
