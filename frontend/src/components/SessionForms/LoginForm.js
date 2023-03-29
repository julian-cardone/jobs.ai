import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SessionForm.css";

import { login, clearSessionErrors } from "../../store/session";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((state) => state.sessionErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === "email" ? setEmail : setPassword;
    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="container-lg my-5 pt-4">
      <form className="session-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Log In</h2>

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
        <div className="errors row justify-content-center">{errors?.email}</div>

        <div className="row justify-content-center pl-3 pr-3 pt-2">
          <input
            type="password"
            value={password}
            onChange={update("password")}
            placeholder="Password"
            className="col-4 border rounded"
            id="inputsauth"
          />
        </div>
        <div className="errors row justify-content-center">
          {errors?.password}
        </div>

        <div className="row justify-content-center">
          <input
            type="submit"
            className="col-1 btn btn-outline-primary mt-2"
            value="Log In"
            disabled={!email || !password}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
