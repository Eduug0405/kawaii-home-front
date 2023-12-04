import React  from "react";
import '../Styles/StyesVenta.css'
import Header from "@/app/Components/Header";
import Reporte from "@/app/Components/Reporte";
import Footer from "@/app/Components/Footer";
export default function VentasPage(){
    return(
        <main>
            <Header/>
            <Reporte/>
           <Footer/>
        </main>
    )
}