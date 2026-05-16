import { useState, useEffect } from "react";

const App = () => {

  const [A, setA] = useState(0)
  const [B, setB] = useState(0)


  



  function aChanging(){
    console.log("value of a change")
    
  }

  function bChanging(){
    console.log("value of b change")

  }


    useEffect(function(){
      aChanging()
      console.log("use effect is running")
    },[A,B])

  // const [num, setnum] = useState(0);
  // const [num2, setnum2] = useState(1);

  // useEffect(function () {
  //   console.log("use effect");
  // },[num2]);

  return (
    <div>
      <h1>a is {A}</h1>
      <h1>b is {B}</h1>

      <button onClick={()=>{
        setA(A+1)
      }}>change a </button>
      <button onClick={()=>{
        setB(B -1)
      }}>change b </button>
      {/* <h1>value of num is {num}</h1>
      <h1>value of num2 is{num2}</h1>
      <button
        onMouseEnter={() => {
          setnum(num + 2);
        }}
        onMouseLeave={()=>{
          setnum2(num2 + 10);
        }}
      >click</button> */}
    </div>
  );
};
export default App;
