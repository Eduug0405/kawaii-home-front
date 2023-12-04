import React  from "react";
import '../Styles/StyesVenta.css'
import Header from "@/app/Components/Header";
import Ventas from "@/app/Components/Ventas";
import Footer from "@/app/Components/Footer";
export default function VentasPage(){
    return(
        <main>
            <Header/>
            <Ventas/>
            <Footer/>
        </main>
    )
}