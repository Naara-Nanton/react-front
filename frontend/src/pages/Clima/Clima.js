import React, {useEffect, useState} from "react";
export default function ClimaApi(props) {

const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=418fb3d8e91d75bf3e12778a8460690e&units=metric`
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

const [clima,setClima] = useState([])

useEffect(() => {
  console.log("A")
  obtenerDatos()
  
},[])


 const obtenerDatos  = async() => {
    const data = await fetch (url)
    const users = await data.json ()
    console.log(users.name, users.main.temp)
    setClima({name: users.name, temp: users.main.temp}) 
  }

return (
  <div>
         <p>{clima.name} - {clima.temp}  C°</p>
  </div>
)

}