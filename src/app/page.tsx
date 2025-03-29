
import {Box} from "@mui/material";
import BukzaWidget from "@/components/BukzaWidjet";
import Header from "@/components/Header";
import MainPhotos from "@/components/MainPhotos";
import MainInfo from "@/components/MainInfo";
import HeaderImage from "@/components/HeaderImage";
import Tours from "@/components/Tours";
import Additions from "@/components/Additions";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <HeaderImage/>
            <Header/>

            <MainPhotos/>
            <MainInfo/>
            <Tours/>
            <Additions/>
            <BukzaWidget/>
            <Partnership/>
            <Footer/>

        </main>
    );
}
