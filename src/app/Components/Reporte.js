"use client"
import React, { useState } from "react";
import '../Styles/StylesReporte.css';

const Reporte = () =>{
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        setSelectedDate(new Date(dateValue));
    }

    const fetchReportData = async (selectedDate) => {
        try {
            const formattedDate = selectedDate.toISOString().split('T')[0];
            const response = await fetch(`http://44.206.187.223/ventas?fecha=${formattedDate}`);
        } catch (error) {
            console.error('Error fetching report data:', error);
        }
    }

    return(
        <div className="cuerpo">
            <div className="reportes">
                <h3>Reportes de Ventas</h3>
            </div>
            <div className="calendario">
                <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} />
                <button onClick={() => fetchReportData(selectedDate)}>PDF</button>
            </div>
            <div className="btn-pdf">

            </div>
        </div>
    )
}
export default Reporte;
