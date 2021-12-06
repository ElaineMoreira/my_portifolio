import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
// pages
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

function App() {
  return ( 
    <BrowserRouter>
     <Menu />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contacts">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
