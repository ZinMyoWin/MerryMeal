import React, { useState } from 'react'

const Use = () => {
    const [buttonName, setButtonName] = useState("Take");
    const [status, setStatus] = useState("To Deliver");
    const handleButtonChange =()=>{
        if (buttonName === "Take") {
            setButtonName("Done");
            setStatus("Delivering");
          } 
          else if(buttonName=== "Done"){
           setStatus("Delivered");
          }
          else {
            setButtonName("Take");
            setStatus("To Deliver");
          }
    }
  return (
    <div style={{marginLeft:"5%"}}>
      <h1>{status}</h1>

      <button onClick={handleButtonChange}>{buttonName}</button>
    </div>
  )
}

export default Use

