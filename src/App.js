import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [modeType, setmodeType] = useState(false);
  const [ThemeColor, setThemeColor] = useState('#ffffff');
  const [alert, setAlert] = useState(null);

  const ThemeOne = () => {
    if (ThemeColor !== '#012e88') {
      document.body.style.backgroundColor = '#012e88';
      setThemeColor('#012e88')
    }
    setmodeType(true);
    ShowAlert("Theme Color has been Applied.", 'success')
  }

  const ThemeTwo = () => {
    if (ThemeColor !== '#067f7b') {
      document.body.style.backgroundColor = '#067f7b';
      setThemeColor('#067f7b')
    }
    setmodeType(true);
    ShowAlert("Theme Color has been Applied.", 'success')
  }

  const ThemeThree = () => {
    if (ThemeColor !== '#4f6909') {
      document.body.style.backgroundColor = '#4f6909';
      setThemeColor('#4f6909')
    }
    setmodeType(true);
    ShowAlert("Theme Color has been Applied.", 'success')
  }

  const ThemeFour = () => {
    if (ThemeColor !== '#6d0576') {
      document.body.style.backgroundColor = '#6d0576';
      setThemeColor('#6d0576')
    }
    setmodeType(true);
    ShowAlert("Theme Color has been Applied.", 'success')
  }
  const SetPageMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = '#1b2142'
      setMode("dark");
      ShowAlert("Dark Mode has been Enabled.", 'success')
    }
    else {
      document.body.style.backgroundColor = 'white'
      setMode("light");
      ShowAlert("Light Mode has been Enabled.", 'success')
    }
    setmodeType(false);
    setThemeColor('#ffffff')
  }

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  return (
    <div>
      <Router>
        <Navbar SetPageMode={SetPageMode} mode={mode} ThemeOne={ThemeOne} ThemeTwo={ThemeTwo} ThemeThree={ThemeThree} ThemeFour={ThemeFour} modeType={modeType} ThemeColor={ThemeColor} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Here Is the Text To Analyze" mode={mode} modeType={modeType} ThemeColor={ThemeColor} ShowAlert={ShowAlert} />}></Route>
          <Route exact path="/about" element={<About mode={mode} modeType={modeType} ThemeColor={ThemeColor} />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
