import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Favoritos from "./screens/Favoritos/Favoritos";
import Home from "./screens/Home /Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import notFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <>
    <main>
    <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path='' component={notFound} />
      </Switch>
    </main>
      <Footer />
    </>

  );
}

export default App;