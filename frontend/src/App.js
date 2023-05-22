import { Route, Switch } from "react-router-dom";
import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { AuthRoute, ProtectedRoute } from "./components/Routes/Routes";
import NavBar from "./components/NavBar";

import BootstrapRef from "./components/BootstrapRef";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";

import { getCurrentUser } from "./store/session";
import Home from "./components/HomePage";
import CoverLetterUploaded from "./components/CoverLetterUploaded";

export const UserContext = createContext();
export const ClContext = createContext();

function App() {
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return (
    loaded && (
      <>
        <UserContext.Provider value={user}>
          <ClContext.Provider value={[selectedLetter, setSelectedLetter]}>
            <NavBar />
            <Switch>
              <AuthRoute exact path="/" component={Home} />
              <Route exact path="/bs" component={BootstrapRef} />
              <AuthRoute exact path="/login" component={LoginForm} />
              <AuthRoute exact path="/signup" component={SignupForm} />
              <ProtectedRoute
                path="/uploadedcls"
                component={CoverLetterUploaded}
              ></ProtectedRoute>
            </Switch>
          </ClContext.Provider>
        </UserContext.Provider>
      </>
    )
  );
}

export default App;
