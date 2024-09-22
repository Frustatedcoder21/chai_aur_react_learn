import { useState } from 'react'


function App() {

 const[count,setCount]=useState(15); // count is variable whose default value is 15 , setCount is function which sets the value of count
 function increase(){  // on clicking increase counter the increase function is called
  if(count<20){
  setCount(count+1); // updating the value by  plus one and passing it through setCount
  } else setCount(count)
 }
 function decrease(){ // on clicking decrease counter the decrease function is called
  if(count>0)
  setCount(count-1); // updating the value by minus one and passing it through setCount
else
setCount(count);
 }
  return (
    <>
      <h1>Counter :{count}</h1>
      <button onClick={increase}>Increase counter {count}</button>
      <br />
      <button onClick={decrease}>Decrease counter {count}</button>
    </>
  )
}

export default App
