import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);//alert based state
  
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })  
    setTimeout(() => {
      setAlert(null);
    }, 1500) 
  }
  
  
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#00334d';
      //showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enabled","success")
    }
  }
  return (
  <>
  <Router>
  <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">{/*exact here makes the route to match exactly what inside. in absence of exact partial matching is done which can cause bug*/}
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>
          </Route>
  </Switch>
  </div>
  </Router>
  </>
  );
}

export default App;
