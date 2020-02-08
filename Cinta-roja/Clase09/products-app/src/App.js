import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Pokemon from "./components/Pokemon";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Nav}/>
        <Route exact path="/pokemon/:name" component={(props)=> <Pokemon {...props} custom="Devf"/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
