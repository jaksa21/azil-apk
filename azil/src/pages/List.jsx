import Navbar from "../components/Navbar";
import "./ListStylees.css"
import { useState, useEffect } from "react";


function List (){

    const [animalData, setAnimalData] = useState([]);

    useEffect(() => {
      const animalData = JSON.parse(localStorage.getItem('animalData')) || [];
      setAnimalData(prevAnimalDataList => [animalData]);
  
    }, []);
      

    return(
        <>
            <Navbar />
            
            <div>
      <h1>List Page</h1>
      <ul>
        {animalData.map((animalData, index) => (
          <li key={index}>
            <p>Name: {animalData.name}</p>
            <p>Type: {animalData.type}</p>
            <p>How old is it: {animalData.age}</p>
          </li>
        ))}
      </ul>
    </div>

  
                
        </>
    )
}

export default List