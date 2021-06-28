import MainLayout from "../components/MainLayout";
import Header from "../components/cards/Header";
import '../styles/Terms.module.scss'
import Main from "../components/terms/Main";

export default function Terms() {
    return (
        <MainLayout title={'Terms'}>
            <Header/>
            <Main/>
        </MainLayout>
    )
}