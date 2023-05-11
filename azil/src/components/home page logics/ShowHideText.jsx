import { useState } from "react"



function ShowHideText (props) {
    
    const [showText, setShowText]= useState(false)
    const ShowInput = ()=>{
        setShowText(!showText)}


    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    
    return(
        <>
        
            <button className="show-more-button"
            onClick={()=>{
                ShowInput()
                handleClick()
            }}>
                { active ? "Show less" : "Contact us"}
                </button>
            {showText ? <p>{props.input}</p> : ""}
            
        </>

    )
}

export default ShowHideText