import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, typ)=>{
    setalert({
      msg: message,
      type: typ
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }


  const togglemode = () =>{
    if(mode === "dark"){
      setmode("light")
      document.body.style.backgroundColor = "#ffffff"
      showAlert('mode set to light','success');
    }else{
      setmode("dark");
      document.body.style.backgroundColor = "#1f1f1f"
      showAlert('mode set to dark','success');
    }
  }
  return (
    <> 
      <Navbar title="TextUtils" mode={mode} aboutText='About TextUtils' togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm headings="Enter Text to analyse" showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
