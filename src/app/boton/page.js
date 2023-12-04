import React  from "react";
import '../Styles/StylesPrincipal.css'
import Header from "@/app/Components/Header";
import Boton from "@/app/Components/Boton";
import Footer from "@/app/Components/Footer";
export default function BotonPage(){
    return(
        <main>
            <Header/>
            <Boton/>
            <Footer/>
        </main>
    )
}