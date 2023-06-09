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
import CoverLetterGenerate from "./components/CoverLetterGenerate";
import { fetchCoverLetter } from "./store/coverLetter";

export const UserContext = createContext();
export const ClContext = createContext();

function App() {
  const dispatch = useDispatch();

  //letter from local storage
  const localLetter = JSON.parse(localStorage.getItem("selectedCl")) || null;

  const [loaded, setLoaded] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(localLetter);

  //This one is the fetched encoding from AWS
  const selectedCoverLetter =
    useSelector((state) => state.uploadedCoverLetters?.one) || null;

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
    if (selectedLetter) {
      dispatch(fetchCoverLetter(selectedLetter._id));
    }
  }, [dispatch, selectedLetter]);

  return (
    loaded && (
      <>
        <Switch>
          <UserContext.Provider value={user}>
            <ClContext.Provider
              value={[selectedLetter, setSelectedLetter, selectedCoverLetter]}
            >
              <AuthRoute exact path="/" component={Home} />
              <Route exact path="/bs" component={BootstrapRef} />
              <AuthRoute exact path="/login" component={LoginForm} />
              <AuthRoute exact path="/signup" component={SignupForm} />
              <NavBar />
              <ProtectedRoute
                path="/uploadedcls"
                component={CoverLetterUploaded}
              ></ProtectedRoute>
              <ProtectedRoute
                path="/generatecl"
                component={CoverLetterGenerate}
              ></ProtectedRoute>
            </ClContext.Provider>
          </UserContext.Provider>
        </Switch>
      </>
    )
  );
}

export default App;
