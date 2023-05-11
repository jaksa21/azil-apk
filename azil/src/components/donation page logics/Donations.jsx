import "./DonationsStylees.css"
import React, { useState } from "react";

function Donation2() {
  const [searchItems, setSearchItems] = useState([])
  const [donatedItems, setDonatedItems] = useState([])
  const [isAdminMode, setIsAdminMode] = useState(false)

  const handleAddItem = (e) => {
    e.preventDefault()
    const newItem = {
      type: e.target.type.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
    };
    setSearchItems([...searchItems, newItem])
    e.target.reset()
  }

  const handleRemoveItem = (index) => {
    const updatedItems = [...searchItems]
    updatedItems.splice(index, 1)
    setSearchItems(updatedItems)
  }

  const handleMoveItem = (index) => {
    const itemToMove = searchItems[index]
    const updatedItems = [...searchItems]
    updatedItems.splice(index, 1)
    setSearchItems(updatedItems)
    setDonatedItems([...donatedItems, itemToMove])
  };

  const handleRemoveDonatedItem = (index) => {
    const updatedItems = [...donatedItems]
    updatedItems.splice(index, 1)
    setDonatedItems(updatedItems)
  }

  const handleMoveToSearch = (index) => {
    const itemToMove = donatedItems[index]
    const updatedItems = [...donatedItems]
    updatedItems.splice(index, 1)
    setDonatedItems(updatedItems)
    setSearchItems([...searchItems, itemToMove])
  }

  const handleToggleAdminMode = () => {
    setIsAdminMode((prevMode) => !prevMode)
  }

  return (
    <div>
      <label><input type="checkbox" checked={isAdminMode} onChange={handleToggleAdminMode}/> Are you admin </label>
      {isAdminMode ? (<><div className="input-div">
          <h1>Donacijska stranica</h1>
          <form className="donation-form" onSubmit={handleAddItem}>
            <label className="donation-label" htmlFor="type">Tip donacije: </label>
            <input className="donation-input" type="text" name="type" id="type" required />
            <label className="donation-label" htmlFor="amount">Iznos: </label>
            <input className="donation-input" type="number" name="amount" id="amount" required />
            <label className="donation-label" htmlFor="description">Opis: </label>
            <input className="donation-input" type="text" name="description" id="description" required />
            <button className="donation-button" type="submit">Dodaj</button>
          </form>
        </div>
        
        <div className="trazimo-div">
        <h2>Tražimo donacije:</h2>
        <ul className="trazimo-list">
          {searchItems.map((item, index) => (
            <li className="trazimo-single" key={index}>
              {item.type}<br></br>
              {item.amount}<br></br>
              {item.description}<br></br>
              <button className="izbrisi-donaciju" onClick={() => handleRemoveItem(index)}>Ukloni</button>
              
            </li>
          ))}
        </ul>
    </div>

    <div className="donirano-div">
              <h2>Donirano:</h2>
              <ul className="donirano-list">
                {donatedItems.map((item, index) => (
                  <li className="donirano-single" key={index}>
                    {item.type}<br></br>
                    {item.amount} <br></br>
                    {item.description}<br></br>
                    <button className="izbrisi-donaciju2" onClick={() => handleRemoveDonatedItem(index)}>
                      Ukloni
                    </button>
                    <button className="premjesti-donaciju-u-trazeno" onClick={() => handleMoveToSearch(index)}>Ponovi zahtjev</button>
                  </li>
                ))}
              </ul>
        </div>
    </>
    ) 
    
    : 
    
    (<div className="trazimo-div">
            <h2>Tražimo donacije:</h2>
            <ul className="trazimo-list">
              {searchItems.map((item, index) => (
                <li className="trazimo-single" key={index}>
                  {item.type}<br></br>
                  {item.amount}<br></br>
                  {item.description}<br></br>
                  
                  <button className="premjesti-donaciju-u-donirano" onClick={() => handleMoveItem(index)}>Doniraj</button>

                </li>
              ))}
            </ul>
        </div>
)}

</div>)}

        


export default Donation2
