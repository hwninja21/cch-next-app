import MainLayout from "../components/MainLayout";
import StaticHeader from "../components/StaticHeader";
import Main from "../components/contactUs/Main";
import {useEffect} from 'react'
import Aos from 'aos'
import '../styles/ContactUs.module.scss'

export default function ContactUs() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <MainLayout title={'Cachy –  Personalized Musical Performance'}>
            <StaticHeader/>
            <Main/>
        </MainLayout>
    )
}
