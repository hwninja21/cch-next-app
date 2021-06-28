import { useState, useEffect } from 'react';
import MainLayout from "../../components/MainLayout";
import Main from "../../components/cards/Main";
import Header from "../../components/cards/Header";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import '../../styles/Card.module.scss'
import LoginModal from '../../components/auth/LoginModal';

function Card({ data }) {
  const router = useRouter();
  let sessionid = '';

  if (typeof window !== 'undefined') {
    sessionid = localStorage.getItem('sessionid');
  }

  const {
    id,
    title,
    genres,
    price,
    iframe,
    covers,
    flowplayerurl,
    poster: {
      url: poster
    },
    video,
  } = data.cardsCollection.items[0];

  const card = {
    id,
    title,
    genres,
    price,
    iframe,
    flowplayerurl,
    songsModal: {
      covers,
    },
    poster,
    video
  }

  const [isOpen, setIsOpen] = useState(false);
  const [modalStat, setModalStat] = useState('');

  useEffect(() => {
    if (router.query.canceled === 'true' && sessionid) {
      toast.warn("Payment canceled!");
      localStorage.removeItem('sessionid')
    }
  }, [router.query])

  const openModal = (stat) => {
    setIsOpen(!isOpen);
    setModalStat(stat);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MainLayout title={'Cachy –  Personalized Musical Performance'}>
      <Header openModal={openModal} />
      <Main card={card} />
      <LoginModal openModal={toggleModal} isOpen={isOpen} modalStat={modalStat} />
    </MainLayout>
  )
}

export default Card

export async function getServerSideProps({ params }) {
  const { id } = params;
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
        cardsCollection (where: {id: ${id}}, limit: 1) {
          items {
            id
            title
            genres
            price
            iframe
            covers
            flowplayerurl
            poster {
              title
              fileName
              url
              width
              height
            }
            video
          } 
        }
      }`,
      }),
    }
  )

  const data = await res.json();

  return {
    props: data
  };
}
