import "./Home.css";
import { Carga } from "../Shared/Carga/Carga";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [cargando, setCargando] = useState(true);
  const [tiempo, setTiempo] = useState(0);

  useEffect(
    function () {
      if (tiempo > 0) {
        setCargando(false);
      } else {
        setCargando(true);
      }
    },
    [tiempo]
  );

  setTimeout(function () {
    setTiempo(1);
  }, 5000);

  if(cargando){
    return(
      <>
        <Carga/>
      </>
    )

  }else{
    return(
      <>
        <section className="banner"></section>
      </>
    )
  }
};
