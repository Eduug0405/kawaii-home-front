"use client"
import React, {useState} from "react";
import '../Styles/StylesBoton.css'
import Swal from "sweetalert2";
const Boton = () => {

    const [nombreProducto, setNombreProducto] = useState('')
    const [precioProducto, setPrecioProducto] = useState('');
    const [productos, setProductos] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nombre: nombreProducto,
            precio: parseInt(precioProducto)
        };

        try {
            const apiUrl = "http://44.206.187.223/productos";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };

            const response = await fetch(apiUrl, options);
            if (response.ok) {
                const responseData = await response.json();
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'PRODUCTO REGISTRADO',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                throw new Error('Error al agregar');
            }
        } catch (error) {
            console.error('Error al registrar', error);
        }
    }

    return (
        <div className="cuerpo">
            <div className="posision">
                <div className="tamano">
                    <div className="form-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-offset-3 col-md-6">
                                    <div className="form-container">
                                        <h3 className="title">Agregar nuevo producto</h3>
                                        <form className="form-horizontal" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>Nombre: </label>
                                                <input
                                                    className="nombre-input"
                                                    type="text"
                                                    id="nombreProducto"
                                                    value={nombreProducto}
                                                    onChange={(e) => setNombreProducto(e.target.value)}
                                                    placeholder="Nombre"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Precio: </label>
                                                <input
                                                    className="precio-input"
                                                    type="text"
                                                    id="precioProducto"
                                                    value={precioProducto}
                                                    onChange={(e) => setPrecioProducto(e.target.value)}
                                                    placeholder="Precio"
                                                />
                                            </div>
                                            <button className="btn signup" type="submit">
                                                Crear producto
                                            </button>
                                            <button className="ir-tabla">
                                                <a href="/tabla">
                                                IR
                                                </a>
                                                </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boton;