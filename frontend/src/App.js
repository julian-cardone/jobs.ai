import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';

import BootstrapRef from "./components/BootstrapRef";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={BootstrapRef}/>
      </Switch>
    </>
  );
}

export default App;
