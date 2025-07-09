
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React, {useState} from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
 setAlert({
  msg: message,
  type: type
 })
 setTimeout(() => {
  setAlert(null);
 },1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      showAlert('dark mode has been enabled', 'success')
      document.body.style.backgroundColor='grey';
    }else{
      setMode('light')
      showAlert('light mode has been enabled', 'success')
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
  <Router>
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className = "container">
<Alert alert= {alert}/>
<Routes>

          <Route  path="/about" element={  <About />} mode={mode} />
          
          
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
          
        </Routes>
</div>
</Router>
  </>
  );
}

export default App;
