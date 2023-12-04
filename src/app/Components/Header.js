import React from "react";
import '../Styles/StylesHeader.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

const Header = () =>{
    return(
        <nav className="navbar">
            <button>
                <a href="/principal">
                    <FontAwesomeIcon icon={faHome} className="icono-casa" />
                </a>
            </button>
            <div className="titulo">
                <Image src="/assets/icono.png" alt="" className="logo"/>
            </div>

            <ul className="list">
                <li>KAWAII HOME</li>
            </ul>
        </nav>
    )
}

export default Header;