"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/StyesVenta.css';

const Ventas = () => {
    const [ventas, setVentas] = useState([{ producto: '', cantidad: '', precio: '', nombreProducto: '' }]);
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState(Array.from({ length: ventas.length }, () => []));
    const [textosBusqueda, setTextosBusqueda] = useState(['']);
    const [totalPrecio, setTotalPrecio] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/productos");
            setProductos(response.data.data);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    const handleSeleccionarProducto = (productoId, productoNombre, productoPrecio, index) => {
        const nuevasVentas = [...ventas];
        nuevasVentas[index] = { producto: productoId, cantidad: '', precio: productoPrecio, nombreProducto: productoNombre };
        setVentas(nuevasVentas);

        const nuevosTextos = [...textosBusqueda];
        nuevosTextos[index] = productoNombre;
        setTextosBusqueda(nuevosTextos);

        const nuevosProductosFiltrados = [...productosFiltrados];
        nuevosProductosFiltrados[index] = [];
        setProductosFiltrados(nuevosProductosFiltrados);

        actualizarTotalPrecio(nuevasVentas);
    };

    const handleBusqueda = (event, index) => {
        const nuevoTextoBusqueda = event.target.value.toLowerCase();

        const nuevosTextos = [...textosBusqueda];
        nuevosTextos[index] = nuevoTextoBusqueda;
        setTextosBusqueda(nuevosTextos);

        let productosEncontrados = [];
        if (nuevoTextoBusqueda.trim() !== '') {
            productosEncontrados = productos.filter(
                (producto) =>
                    producto.nombre.toLowerCase().includes(nuevoTextoBusqueda)
            );
        }

        const nuevosProductosFiltrados = [...productosFiltrados];
        nuevosProductosFiltrados[index] = productosEncontrados;
        setProductosFiltrados(nuevosProductosFiltrados);
    };

    const handleCantidadChange = (index, event) => {
        const nuevasVentas = [...ventas];
        nuevasVentas[index].cantidad = event.target.value;
        setVentas(nuevasVentas);
        actualizarTotalPrecio(nuevasVentas);
    };

    const actualizarTotalPrecio = (nuevasVentas) => {
        let total = 0;
        nuevasVentas.forEach((venta) => {
            if (venta.producto && venta.cantidad) {
                total += parseFloat(venta.precio) * parseFloat(venta.cantidad);
            }
        });
        setTotalPrecio(total);
    };

    const agregarOtraVenta = () => {
        setVentas([...ventas, { producto: '', cantidad: '', precio: '', nombreProducto: '' }]);
        setTextosBusqueda([...textosBusqueda, '']);
        setProductosFiltrados([...productosFiltrados, []]);
    };

    const guardarVenta = async () => {
        const detalle = ventas.map((venta) => {
            const total = parseFloat(venta.precio) * parseFloat(venta.cantidad);
            return {
                idProducto: venta.producto,
                cantidad: parseFloat(venta.cantidad),
                precio: parseFloat(venta.precio),
                total: total,
            };
        });
        const total = detalle.reduce((total, detalle) => total + detalle.total, 0);
        const datosVenta = {
            total: total,
            detalle: detalle,
        };
        console.log('Datos de venta a enviar:', datosVenta)
        try {
            console.log( JSON.stringify(datosVenta));
            const response = await axios.post('http://localhost:3000/ventas', datosVenta)
            console.log('Datos de venta guardados:', response.data);
        } catch (error) {
            if (error.response) {
                console.error('Error de respuesta:', error.response.data);
            } else if (error.request) {
                console.error('Error en la solicitud:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <div className="cuerpo">
            <div className="title">
                <h1>REGISTRO DE VENTAS</h1>
                {ventas.map((venta, index) => (
                    <div className="llave" key={index}>
                        <input className="buscador"
                               type="text"
                               placeholder="Buscar producto"
                               value={textosBusqueda[index]}
                               onChange={(event) => handleBusqueda(event, index)}
                        />
                        <ul>
                            <div className="opciones">
                                {productosFiltrados[index].map((producto) => (
                                    <li key={producto.id}>
                                        <button onClick={() => handleSeleccionarProducto(producto.id, producto.nombre, producto.precio, index)}>
                                            {producto.nombre}
                                        </button>
                                    </li>
                                ))}
                            </div>
                        </ul>
                        <p>Producto seleccionado: {venta.nombreProducto}</p>
                        <p>Precio del producto: ${venta.precio}</p>
                        <input className="cantidad"
                               type="text"
                               placeholder="Cantidad"
                               value={venta.cantidad}
                               onChange={(event) => handleCantidadChange(index, event)}
                        />
                    </div>
                ))}
                <button className="nueva" onClick={agregarOtraVenta}>Agregar otra venta</button>
                <button className="subir" onClick={guardarVenta}>Realizar Venta</button>
                <p className="totalPrecio">Total: ${totalPrecio}</p>
            </div>
        </div>
    );
};

export default Ventas;