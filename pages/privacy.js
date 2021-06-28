import MainLayout from "../components/MainLayout";
import Header from "../components/cards/Header";
import Main from "../components/privacy/Main";
import '../styles/Privacy.module.scss'


export default function Privacy() {
    return (
        <MainLayout title={'Privacy Policy'}>
            <Header/>
            <Main/>
        </MainLayout>
    )
}