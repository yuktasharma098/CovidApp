

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./components/Navbar"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Data from "./components/Data"
import Beds from "./components/Beds"
import Oxygen from "./components/Oxygen"
import Medicine from "./components/Medicine"
import Plasma from "./components/Plasma"
import {Switch,Route,Redirect} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/beds" component={Beds} />
        <Route exact path="/oxygen" component={Oxygen} />
        <Route exact path="/medicine" component={Medicine} />
        <Route exact path="/plasma" component={Plasma} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>

    </>
  );
}

export default App;
