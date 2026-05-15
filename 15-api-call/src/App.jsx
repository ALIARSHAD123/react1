import axios from 'axios'
import  { useState } from 'react'



const App = () => {


  const [data, setdata] = useState([])

  const mygetData  = async()=>{

    const response = await axios.get('https://picsum.photos/v2/list')
     
    setdata(response.data)

  }

 async function getDat(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
  }

  const getData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  }

  const Data = async ()=>{
    const {data} =await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)

  }
  
  return (
    <div>
      <button onClick={getDat}>Get Dat</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={Data}>Data</button>
      <button onClick={mygetData}>My Get Data</button>
      <div>
        {data.map(function(elem , idx){
          return <h3>aahhaahh, {elem.author} {idx} </h3>

        })}
      </div>


    </div>
  )
}

export default App
