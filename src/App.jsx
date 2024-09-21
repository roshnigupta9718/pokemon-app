import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'



function App() {
  let [results,setresults]=useState([])
  console.log(results)
let getdata=async()=>{
  await axios
  .get(`https://pokeapi.co/api/v2/pokemon`)
  .then(val=>setresults(val?.data?.results))
  .catch(err=>console.log(err))
  .finally(console.log('request over '))
  
}
 
  return (
    <div> 
     <Button variant="primary" onClick={getdata}>show</Button>
     <div >
    <hr/>
   { results && results.map(ele=>
   {return <div   key={ele.name}  className='border border-4 p-3 w-25 rounded -5 text-center m-auto my-3'>
    <h1>{ele?.name}</h1>
   <img  height='100px' width='100px' src={ele?.url}/>
   </div>



   })
     
   } 

     </div>
    
    
    </div>

  )
}

export default App