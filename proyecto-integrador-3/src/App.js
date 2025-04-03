import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from "./screens/Home/Home"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import notFound from "./screens/NotFound/NotFound";
import Busqueda from "./components/Busqueda/Busqueda.js";
import Peliculas from "./screens/Peliculas/Peliculas.js";
import Series from "./screens/Series/Series.js";
function App() {
  return (
    <>
    <main>
    <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/busqueda'} component={Busqueda} />
        <Route path={'/series'} component={Series} />
        
        <Route path={'/peliculas'} component={Peliculas} />
        <Route path='' component={notFound} />
      </Switch>
    </main>
    <Footer />
    </>

  );
}

export default App;