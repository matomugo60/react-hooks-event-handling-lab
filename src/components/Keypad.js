// Code Keypad Component Here
import React from "react";

function Keypad (){

    function handlePasswordChange () {
        console.log("Entering password...")
    }
    return (
        // <div></div>
        <input type="password" onChange={handlePasswordChange}/>
    )
}

export default Keypad;