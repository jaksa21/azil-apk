import { useState } from "react"
import "./InputFormStylees.css"

function InputForm () {

const [data, setData] = useState({name:"", email:"", phone:"", message:""})
const handleChange = (e)=>{
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]: value})
    console.log(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault()
    alert(data)
    
}


    return(
       <> <form className="contact-form">
            <h1 className="contact-title">Contact Here</h1>
            <input className="contact-input" type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter name" />
            <input className="contact-input" type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com" />
            <input className="contact-input" type="phone" name="phone" id="" onChange={handleChange} value={data.phone}placeholder="+385" />
            <textarea className="contact-textarea" name="message" cols="20" rows="7" onChange={handleChange} value={data.message} id="" placeholder="Type here..." />
            <button className="contact-button" type="submit">Send</button>
        </form></>
    )
}

export default InputForm