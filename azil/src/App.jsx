import "./App.css";
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import Notifications from "./pages/Notifications"
import InputAnimals from "./pages/InputAnimals"
import List from "./pages/List"



function App() {
  

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/donacije" element={<Donations />}/>
            <Route path="/obavijesti" element={<Notifications />}/>
            <Route path="/popis" element={<List />}/>
            <Route path="/unos" element={<InputAnimals />}/>
        </Routes>
        
    </div>
  )
}

export default App
