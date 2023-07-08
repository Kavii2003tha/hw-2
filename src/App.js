import React, {useState} from "react";
import './App.css';

function App(){
  const [weight,setweight]=useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState('');
  const [message,setmessage]=useState('');
  let calculatebmi=(event) =>{
    event.preventDefault();
    if(weight ===0 || height===0){
      alert("invalid input");
    }
    else{
      let bmi=(weight/(height/100)**2)
      setbmi(bmi.toFixed(2))

      if(bmi<30){
        setmessage("You are Underweight")
      }else if(bmi >=30 && bmi<=45){
        setmessage("You are Healthy weight")
      }else if(bmi>=45 && bmi<=60){
        setmessage("You are Over weight")
      }else{
        setmessage("You are Obese")
      }
    }
  }
  let imgsrc;
  if(bmi<1){
    imgsrc=null;
  }
  else if(bmi<30){
    imgsrc=require('./images/Underweight.jpg');
  }
  else if(bmi>=30 && bmi<=45){
    imgsrc=require('./images/healthy.jpeg');
  }
  else if(bmi>=45 && bmi<=60){
    imgsrc=require('./images/Overweight.jpg');
  }
  else{
    imgsrc=require('./images/obese.jpg');
  }
  
let reload=()=>{
  window.location.reload();
}

return(
  <div className="app">
    <div className="container">
      <h2  className="center">BMI CALCULATOR</h2>
      <form onSubmit={calculatebmi}>
        <div>
          <label>Weight (kg)</label>
          <input value={weight} onChange={(e)=> setweight(e.target.value)}/>
        </div>
        <div>
          <label>Height (m)</label>
          <input value={height} onChange={(e)=> setheight(e.target.value)}/>
        </div>
        <button className="btn" type="submit">Submit</button>
        <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
      </form>
      <div className="center">
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
      <div className="img-container">
        <img src={imgsrc} alt=""></img>
      </div>
    </div>
  </div>
)
}

export default App;

