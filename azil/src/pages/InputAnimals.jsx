import Navbar from "../components/Navbar"
import AnimalForm from "../components/input animals logics/formNewAnimals"
import React from "react"
import { useState } from "react";




function InputAnimals (){

    const [animalList, setAnimalList] = useState([]);

  const onSubmit = (animalData) => {
    setAnimalList([...animalList, animalData]);
  };

    

    return(
        <>
            <Navbar />
             <AnimalForm onSubmit={onSubmit} />
          
             
            
        </>
    )
}

export default InputAnimals