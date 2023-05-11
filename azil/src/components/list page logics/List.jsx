import React, { useState } from 'react';

function ListPage(props) {
  const [animalData, setAnimalData] = useState(props.animalData);



  const animalListItems = animalData.map((animal, index) => (
    <li key={index}>
      <p>Name: {props.name}</p>
      <p>Type: {props.type}</p>
      <p>Description: {props.description}</p>
      
    </li>
  ));

  return (
    <div>
      <h1>List Page</h1>
      <ul>
        {animalListItems}
      </ul>
    </div>
  );
}

export default ListPage;
