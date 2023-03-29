import { Link } from "react-router-dom";

function NavBarLinksLoggedOut() {
  return (
    <>
      <div
        className="collapse navbar-collapse justify-content-center align-center"
        id="main-nav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/signup"}>Signup</Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBarLinksLoggedOut;
