import { useState } from "react";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../../authConfig/authProviders";
import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import jwtFetch from "../../store/jwt";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function SignUp() {
  const [googleInfo, setGoogleInfo] = useState("");

  const socialMediaAuth = (provider) => {
    //fetch key
    jwtFetch("/google")
      .then((res) => res.json())
      .then((data) => {
        const firebaseConfig = {
          apiKey: data.google,
          authDomain: "octo-spork.firebaseapp.com",
          projectId: "octo-spork",
          storageBucket: "octo-spork.appspot.com",
          messagingSenderId: "100128485699",
          appId: "1:100128485699:web:36bea85e5c97722feafff6",
          measurementId: "G-KZQWGLQJQ9",
        };
        //initialize firebase app
        const firebaseApp = initializeApp(firebaseConfig);
        const auth = getAuth(firebaseApp);

        signInWithPopup(auth, provider)
          .then((result) => {
            // console.log(result);
            setGoogleInfo(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            // const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            // console.log(error)
            return error;
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      });
  };

  console.log(googleInfo);

  return (
    <button className="col-4" onClick={() => socialMediaAuth(googleProvider)}>
      Google
    </button>
    // <button onClick={() => handleAuth(facebookProvider)}>Facebook</button>
    // <button onClick={() => handleAuth(githubProvider)}>GitHub</button>
  );
}

export default SignUp;
