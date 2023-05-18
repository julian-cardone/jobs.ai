import { Switch } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { AuthRoute, ProtectedRoute } from "./components/Routes/Routes";
import NavBar from "./components/NavBar";

import BootstrapRef from "./components/BootstrapRef";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";

import { getCurrentUser } from "./store/session";
import Home from "./components/HomePage";
import CoverLetter from "./components/CoverLetter";

function App() {

  const dispatch = useDispatch();
  
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return (
    loaded && (
      <>
        <NavBar />
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute exact path="/bs" component={BootstrapRef} />
          <AuthRoute exact path="/login" component={LoginForm} />
          <AuthRoute exact path="/signup" component={SignupForm} />
          <ProtectedRoute exact path="coverletter" component={CoverLetter} />
        </Switch>
      </>
    )
  );
}

export default App;
