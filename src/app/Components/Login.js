"use client"
import React from "react";
import '../Styles/StylesLogin.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Login = () =>{
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === 'paola123' && password === '12345') {
            window.location.href = "/principal";
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
    };


    return(
        <div className="container">
            <div className="bottom-text">
                <h3 className="text">KAWAII <span>HOME</span></h3>
            </div>
            <div className="cuerpo">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="username" placeholder="USUARIO"/>
                    <input type="password" id="password" placeholder="CONTRASEÑA" />
                    <button>Login</button>
                </form>
                <div className="ear-l"></div>
                <div className="ear-r"></div>
                <div className="panda-face">
                    <div className="blush-l"></div>
                    <div className="blush-r"></div>
                    <div className="eye-l">
                        <div className="eyeball-l"></div>
                    </div>
                    <div className="eye-r">
                        <div className="eyeball-r"></div>
                    </div>
                    <div className="nose"></div>
                    <div className="mouth"></div>
                </div>
                <div className="hand-l"></div>
                <div className="hand-r"></div>
                <div className="paw-l"></div>
                <div className="paw-r"></div>
            </div>
        </div>
    )
}

export default Login;