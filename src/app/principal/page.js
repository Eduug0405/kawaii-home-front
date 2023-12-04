import React  from "react";
import '../Styles/StylesPrincipal.css'
import Header from "@/app/Components/Header";
import Principal from "@/app/Components/Principal";
import Footer from "@/app/Components/Footer";
export default function PrincipalPage(){
    return(
        <main>
            <Header/>
            <Principal/>
            <Footer/>
        </main>
    )
}