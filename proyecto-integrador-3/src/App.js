import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Favoritos from "./screens/Favoritos/Favoritos";
<<<<<<< HEAD
import Home from "./screens/Home /Home";
=======
import Home from "./screens/Home/Home"
import VerTodas from "./screens/VerTodas/VerTodas";
>>>>>>> de11942 (Utilizando los primeros datos de la Api, seccion de pelis Populares en home)
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import notFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <>
<<<<<<< HEAD
    <main>
    <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path='' component={notFound} />
      </Switch>
    </main>
=======
      <Header />
      <main>
        <Switch>
          <Route path={'/'} exact={true} component={Home} />
          <Route path={'/favoritos'} component={Favoritos} />
          <Route path={'/vertodas'} component={VerTodas} />
          <Route path='' component={notFound} />
        </Switch>
      </main>
>>>>>>> de11942 (Utilizando los primeros datos de la Api, seccion de pelis Populares en home)
      <Footer />
    </>

  );
}

export default App;