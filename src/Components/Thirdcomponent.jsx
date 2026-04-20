import { useState } from "react";

const Thirdcomponent = () => {
    // declare state variables 
const [ number, setNumber] = useState (456)    
const [ marks, setMarks] = useState (30)
const [school, setSchool] = useState ("Modcom")
const [name, setName] = useState ("Barry")
const [city, setCity] = useState ("New York")
const [country, setCountry] = useState ("Kenya")

// create function to update number 
const updatenumber = () => {
    setNumber (number / 5)
}

// FUNCTION TO UPDATE MARKS 
const updatemarks = () => {
    setMarks (85)
}

// Function to update school 
const updateschool = () => {
    setSchool ("Brooklyn High")
}

// Function to update name 
const updatename = () => {
    setName ("Molly")
}

// function to update city 
const updatecity = () => {
    setCity ("Paris")
}

// function to update country 
const updatecountry = () => {
    setCountry ("Beijing")
}

    return (
        <div>
            <h1> Understanding React Hooks </h1>
            <h2> The current value is : {number} </h2>
            <button onClick = { updatenumber }> Update The Number </button>
            <h3> The current marks is : {marks} </h3>
            <button onClick={ updatemarks }> Update Marks </button>
            <h3> The current school is : {school} </h3>
            <button onClick={ updateschool }> Update The School </button>
            <p> The current name is : {name} </p>
            <button onClick={ updatename }> Update The Name </button>
            <p> The current city is : {city} </p>
            <button onClick={ updatecity }> Update The City </button>
            <p> The current country is : {country} </p>
            <button onClick={ updatecountry }> Update The Country </button>
        </div>
    )
}
export default Thirdcomponent 