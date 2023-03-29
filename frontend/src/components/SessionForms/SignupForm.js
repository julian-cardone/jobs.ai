import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SessionForm.css";
import { signup, clearSessionErrors } from "../../store/session";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const errors = useSelector((state) => state.sessionErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    let setState;

    switch (field) {
      case "email":
        setState = setEmail;
        break;
      case "password":
        setState = setPassword;
        break;
      case "password2":
        setState = setPassword2;
        break;
      default:
        throw Error("Unknown field in Signup Form");
    }

    return (e) => setState(e.currentTarget.value);
  };

  const emailSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(signup(user));
  };

  return (
    <>
      <div className="container-lg my-5 pt-4">
        <form className="session-form" onSubmit={emailSubmit}>
          <h2 className="text-center mb-4">Sign Up</h2>

          <div className="row justify-content-center pl-3 pr-3 pt-2">
            <input
              type="email"
              className="col-4 border rounded"
              id="inputsauth"
              value={email}
              onChange={update("email")}
              placeholder="Email"
            />
          </div>
          <div className="errors row justify-content-center">
            {errors?.email}
          </div>

          <div className="row justify-content-center pl-3 pr-3 pt-2">
            <input
              type="password"
              className="col-4 border rounded"
              id="inputsauth"
              value={password}
              onChange={update("password")}
              placeholder="Password"
            />
          </div>
          <div className="errors row justify-content-center">
            {errors?.password}
          </div>

          <div className="row justify-content-center pl-3 pr-3 pt-2">
            <input
              type="password"
              className="col-4 border rounded"
              id="inputsauth"
              value={password2}
              onChange={update("password2")}
              placeholder="Confirm Password"
            />
          </div>
          <div className="errors row justify-content-center">
            {password !== password2 && "Confirm Password field must match"}
          </div>

          <div className="row justify-content-center">
            <input
              type="submit"
              className="col-1 btn btn-outline-primary mt-2"
              value="Sign Up"
              disabled={!email || !password || password !== password2}
            />
          </div>

        </form>
      </div>
    </>
  );
}

export default SignupForm;
