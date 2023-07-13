
import './App.css';
import Login from './component/Login';


import {  Routes,Route   } from 'react-router-dom'
import PassCode from './component/PassCode';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';







//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <Routes>


<Route path='/'  element={ <Login />}/>
<Route path='passcode'  element={ <PassCode />}/>


   </Routes>
    </div>
  );
}

export default App;
