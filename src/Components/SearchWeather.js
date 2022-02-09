import React from 'react';
import {useState , useEffect} from 'react'
import './SearchsWeather.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTemperatureHigh } from "react-icons/fa";
import { BsCloud } from "react-icons/bs";


const api = {
  key: "bf28056ca2ee9dbe3268c40aaa02f0b7",
  base: "api.openweathermap.org/data/2.5/"
}


function SearchWeather() {
  const [Post, setPost] = useState('Paris');
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }    

 const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
    
   
  return <>
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
    <main>
    <div className = "Container">
        <div className = "Search-box">
          <input
           type= 'search' 
           id = 'Search' 
           placeholder = 'Search City...' 
           onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
           />
        </div>
        
         <div>
           <div className = "location"> {Post} </div>
           <div className = "date"> {dateBuilder(new Date())} </div>
           <div className = "weather-box">
             <div className = "temp"> 15°C  <FaTemperatureHigh/> 
                 <br /> <BsCloud size = "2em" />
         </div>
           </div>
          </div>
      
     </div> 
     </main>
    </div>
        
     </>;
     }


export default SearchWeather;