import React from "react";
import {Switch, Route} from 'react-router-dom';
import Favoritos from "./screens/Favoritos/Favoritos";
import Home from "./screens/Home /Home";
import VerTodas from "./screens/VerTodas/VerTodas";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Header/>
     <Switch>
      <Route path={'/'} exact= {true} component={Home}/>
      <Route path={'/favoritos'} component={Favoritos}/>
      <Route path={'/vertodas'} component={VerTodas}/>
    </Switch>
    <Footer/>
    </>
   
  );
 }
 
 export default App;