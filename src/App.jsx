import React from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { useState } from "react";

import ImageCompressor from "./components/ImageCompressor";

function App() {
  const [alert, setAlert] = useState("null");
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not




  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Compressor - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#79d2f0";
      showAlert("Light mode has been enabled", "success");
      document.title = "Compressor - Light Mode";
    }
  };

  return (
    <> <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />



      <Alert alert={alert} />
      <ImageCompressor />
    </>
  );
}
export default App;
