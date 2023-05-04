import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About"
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

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
      showAlert("Dark has been Enabled", "success");
      setInterval(() => {
        document.title = "Kam Kam or bus Kam";
      }, 2000);
      setInterval(() => {
        document.title = "Quaid ka Farman";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light has been Enabled", "success");
    }
  };
    return (
      <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About/>
            </Route> */}
            {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
            {/* </Route>
          </Switch>         */}
       </div>
       {/* </Router> */}
       </>
    );

}

export default App;
