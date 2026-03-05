import { useState } from "react";

const Thirdcomponent = () => {
    // declare state variables 
const [ number, setNumber] = useState (456)    
const [ marks, setMarks] = useState (30)

// create function to update number 
const updatenumber = () => {
    setNumber (number / 5)
}

const updatemarks = () => {
    setMarks (85)
}

    return (
        <div>
            <h1> Understanding React Hooks </h1>
            <h2> The current value is : {number} </h2>
            <button onClick = { updatenumber }> Update The Number </button>
            <h3> The current marks is : {marks} </h3>
            <button onClick={ updatemarks }> Update Marks </button>
        </div>
    )
}
export default Thirdcomponent 