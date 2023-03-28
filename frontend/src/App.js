import { Route, Switch } from "react-router-dom";
import BootstrapRef from "./components/BootstrapRef";

function App() {
  return (
    <>
      <Switch>
        <Route path="/bs">
          <BootstrapRef></BootstrapRef>
        </Route>
        <Route path="/login">
          
        </Route>
      </Switch>
    </>
  );
}

export default App;
