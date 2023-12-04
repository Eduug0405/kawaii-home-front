import React  from "react";
import '../Styles/StylesPrincipal.css'
import Header from "@/app/Components/Header";
import Tabla from "@/app/Components/Tabla";
import Footer from "@/app/Components/Footer";
export default function TablaPage(){
    return(
        <main>
          <Header/>
            <Tabla/>
          <Footer/>
        </main>
    )
}