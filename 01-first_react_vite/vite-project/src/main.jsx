import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/* function Myapp() {
  return (                                //we can write our function here also
    <h2>Hola!!!</h2>
  );
}  */
const element=React.createElement(  // this how elements can be created
  'a',
  {href:"http://google.com", target:'-blank'},
  "Click me to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {element} */}
    <App/>
    {/* <Myapp /> */} 
  </React.StrictMode>,
);
