import { useState } from 'react';
import "./formNewAnimalsStylees.css"
import React from 'react';



function AnimalForm(props) {
  
  const [animalData, setAnimalData] = useState({
    name: "",
    type: "",
    age: "",
    chip:"",
    note:""
  });
  
  

  const handleInputChange = (event) => {
    const { name, value , age , chip , note } = event.target;
    setAnimalData({ ...animalData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(animalData);
    setAnimalData({
      name: "",
      type: "",
      age: "",
      chip:"",
      note:""
    });
    console.log(animalData)
  };

  

  
  

  return (
  <>
 
    <form className='animal-form' onSubmit={handleSubmit}>
      <h1>Enter new animals</h1>
      <div>
        <label className='animal-label' placeholder='Enter name' htmlFor="name">Name:</label>
        <input
          className='animal-input-text-number'
          type="text"
          id="name"
          name="name"
          value={animalData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className='animal-label' htmlFor="type">Type:</label>
        <select
          className='animal-select'
          id="type"
          name="type"
          value={animalData.type}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Choose --</option>
          <option value="mačka">Cat</option>
          <option value="pas">Dog</option>
          <option value="ptica">Bird</option>
        </select>
      </div>
      <div>
        <label className='animal-label' htmlFor="age">Years:</label>
        <input
          className='animal-input-text-number'
          type="number"
          id="age"
          name="age"
          value={animalData.age}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className='animal-label' htmlFor="chip">Chip:</label>
        <input
          className='animal-checkbox'
          type="checkbox"
          id="chip"
          name="chip"
          checked={animalData.chip}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className='animal-label' htmlFor="note">Important info:</label>
        <textarea
          className='animal-textarea'
          id="note"
          name="note"
          value={animalData.note}
          onChange={handleInputChange}
        />
      </div>
      <button className='animal-button' type='submit'>Submit</button>
      </form>

      
      </>
  )}

  export default AnimalForm
