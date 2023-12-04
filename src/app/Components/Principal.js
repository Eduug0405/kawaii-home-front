"use client"
import React from "react";
import '../Styles/StylesPrincipal.css';
import Image from 'next/image';

const Principal = () =>{
    return(
        <div className="cuerpo">
            <div className="Bienvenida">
                <div className="Bienvenida-usuarios">BIENVENIDA</div>
            </div>
            <div className="Frase">
                <div className="admi">¿Qué desea realizar?</div>
            </div>
            <div className="container" >
                <div className="card">
                    <Image src="/assets/icon1.png" alt="" />
                    <div className="title">
                        <a href="/tabla"> Administrar productos</a>
                    </div>
                </div>
                <div className="card">
                    <Image src="/assets/bag-removebg-preview.png" alt=""/>
                    <div className="title">
                        <a href="/ventas"> Agregar Venta</a>
                    </div>

                    </div>
                <div className="card">
                    <Image src="/assets/dinero-removebg-preview.png" alt=""/>
                    <div className="title">
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;