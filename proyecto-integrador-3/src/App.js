import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from "./screens/Home/Home"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import notFound from "./screens/NotFound/NotFound";
import Busqueda from "./components/Busqueda/Busqueda.js";
import Populares from "./screens/Populares/Populares.js";
import Cartel from "./screens/Cartelera/Cartelera.js";
import Favoritos from "./screens/Favoritos/Favoritos.js";



function App() {
  return (
    <>
    <main>
    <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/busqueda'} component={Busqueda} />
        <Route path={'/populares'} component={Populares} /> 
        <Route path={'/cartelera'} component={Cartel} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path='' component={notFound} />
      </Switch>
    </main>
    <Footer />
    </>

  );
}

export default App;