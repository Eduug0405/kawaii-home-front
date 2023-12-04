 "use client"
import React, { useEffect, useState } from 'react';
import '../Styles/StylesTabla.css';
import axios from "axios";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faPlus } from '@fortawesome/free-solid-svg-icons';
 import Swal from "sweetalert2";


 export default function Tabla() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/productos",);
            //const productosArray = Object.values(response.data);
            setProductos(response.data.data);
            console.log(response)
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

     const handleEliminar = async (id) => {
         try {
             const response = await axios.delete(`http://localhost:3000/productos/${id}`)
             console.log(('Producto eliminado con exito'))
             window.location.reload()
         } catch (error){
             console.log('No se pudo eliminar el producto')
         }
     };


     const handleModificar = async (id, nuevoPrecio, nuevoNombre) => {
        try {
            const datosActualizar = {
                nombre: nuevoNombre,
                precio: nuevoPrecio
            };

            const response = await fetch(`http://localhost:3000/productos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosActualizar)
            });

            if (response.ok) {
                console.log("Producto actualizado exitosamente");

                fetchData();
            } else {
                console.error("Error al actualizar el producto:", response.statusText);
            }
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
    };


    return (

        <div className="table">
            <div>
                <h1 className="t">PRODUCTOS DISPONIBLES</h1>
                <li className='frontera'></li>
            </div>
            <div className="table-row table-header">
                <div className="table-cell">Nombre</div>
                <div className="table-cell">Precio</div>
                <div className="table-cell">Acciones</div>
            </div>
            {productos.map((item) => (
                <div key={item.id} className="table-row">
                    <div className="table-cell">{item.nombre}</div>
                    <div className="table-cell">{item.precio}</div>
                    <div className="table-cell">
                        <button className="button-55" onClick={() => handleEliminar(item.id) }>Eliminar</button>
                        <button className="button-55" onClick={() => {

                            const nuevoPrecio = prompt('Ingresa el nuevo precio:');
                            const nuevoNombre = prompt('Ingresa el nuevo nombre:');
                            if (nuevoPrecio !== null && nuevoNombre !== null) {
                                handleModificar(item.id, nuevoPrecio, nuevoNombre);
                            }
                        }}>Modificar</button>

                    </div>
                    <button>
                        <a href="/boton">
                        <FontAwesomeIcon icon={faPlus} />
                        </a>
                        </button>
                </div>
            ))}
        </div>
    );
}
