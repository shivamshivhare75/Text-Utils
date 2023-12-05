import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Navbar from './components/Navbar.js';

function App() {
  const [mode, setmode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#343a40"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={changeMode} />
      <div className="container my-4" >
        <Form heading="Enter The Text To Analyze" modeText="Enable Dark Mode" toggleMode={changeMode} />
      </div>

    </>
  );
}

export default App;
