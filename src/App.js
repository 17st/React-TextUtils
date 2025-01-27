import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router, Routes, Route
// } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // alert is an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark');  
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
    // setInterval(() => {
    //   document.title = 'TextUtils is amazing';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtils Now';
    // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>   
    {/* <Navbar title="TextUtils" AboutText="About TextUtils"/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode}/>
            }/>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Reverse Text" mode={mode}/>
      </div>    
    {/* </Router> */}
    </>  
  );
}

export default App;
