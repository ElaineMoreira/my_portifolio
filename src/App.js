import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Homepage from "./components/Homepage";
import Error from "./components/Error";
// pages
import Projects from "./pages/Projects";

function App() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
