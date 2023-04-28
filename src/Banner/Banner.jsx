import 'animate.css';
import WOW from 'wow.js'
import { useEffect } from 'react';


export function Banner(){

    useEffect(() =>{
        const wow = new WOW();
        wow.init();
    }),[]
    

    return (

        <>
        <figure>
      
            <img src="../../src/img/Logo.png" alt=""  className="animate__animated animate__shakeX" />
        </figure>
        <br /><br /><br />
           
        </>


    )
}