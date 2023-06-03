import "./Show.css"
import { useEffect, useState } from "react";
import { searchBooking } from "../service/searchBooking";
import { Carga } from "../Shared/Carga/Carga";

export function ShowAgenda() {
  const [reservas, setReserva] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(function () {
    searchBooking().then(function (respuestaDelBack) {
      setReserva(respuestaDelBack.reservas);
      setCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <>
        <Carga/>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-3 ">
            {reservas.map(function (reserva) {
              return (
                
                  <div className="col">
                    <div className="card h-100 shadow">
                      <h6>Clente: {reserva.nombre}</h6>
                      <p>Contacto: {reserva.telefono}</p>
                      <p>fecha: {reserva.dia}</p>
                      <p>Hora: {reserva.hora}</p>
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
