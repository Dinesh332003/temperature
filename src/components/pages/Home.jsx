import React, {useState} from 'react'
import "../../assets/css/Main.css"
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
 

const Home = () => { 
  const [city,setCity]=useState("")
  const [temp,setTemp]=useState("")


  const data = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=717093bdc5814179492804d14704653b`).then((response) => {
      console.log(response.data,"okkk")
 setTemp(response.data.main.temp-273.15)
    }).catch((error)=>{
      console.log("error",error)
    })
  }

 
 
  return (
    <div className='main'>
    
      <div className='main-in'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Celsius(c) |
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Celsius(C)</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fahrenheit(C)</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>

        <div className='search'>
          <input type="text" placeholder='Search Location' size="30" onkeypress="clickPress(event)" onChange={(e)=>setCity(e.target.value)} value={city}/>
          <button onClick={data}>Search</button>
        </div>
       
      </div>



      <div className="date">
        <p> {new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h1>{temp}</h1>
      </div>

    
    </div>
  )
}

export default Home
