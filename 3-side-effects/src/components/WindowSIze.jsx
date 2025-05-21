import React, { useEffect} from 'react';
import { useState } from "react"

export default function WindowSize(){

    const[size, setSize] = useState(getSize());

    function getSize(){
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    useEffect(() => {

        //console.log(size.width);
        
        window.addEventListener('resize', handleResize, false);

        function handleResize(){
            setSize(getSize());
        }

        return () => { // cleanup function,  e é sempre executada antes da componente ser destruída e antes de cada render da componente
            window.removeEventListener('resize', handleResize, false);
        }
    }, [] ); // array de dependencias vazia; só é executado no inicio da construcção da componente;
    // array de dependencias do Effect, que define quando é executado o meu effect;

    return (
        <>
        <p>Width: {size.width}, Height: {size.height}</p>
        </>
    );
}