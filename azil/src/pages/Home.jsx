import Navbar from "../components/Navbar";
import "./HomeStylees.css";
import HomeImg from "../assets/Home.jpg/";
import ShowHideText from "../components/home page logics/ShowHideText";
import InputForm from "../components/home page logics/InputForm";


function Home (){

    

    return(
        <>
            <Navbar />
            <div className="main">
                <img src={HomeImg} alt="main-img" />
                <div className="text-main">
                    <h1 className="title">Lets make their lifes better</h1>
                    <div className="text">
                        <p>Our goals:</p><br></br>
                        <p> 1. Provide a safe place for abandoned and homeless domestic animals <br></br>
                            2. Care for, exercise and rehabilitate the animals in care<br></br>
                            3. Find permanent, loving homes for abandoned, mistreated or homeless domestic pets.<br></br>
                            4. Educate the public on caring for animals and prevent future pets being abandoned <br></br>      
                            </p>
                    </div>
                    <ShowHideText input={<InputForm className="abc"/>} />
                    
                </div>
            </div>
             
        </>
    )
}

export default Home