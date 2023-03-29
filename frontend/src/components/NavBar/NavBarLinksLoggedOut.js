import { Link } from "react-router-dom";

function NavBarLinksLoggedOut() {
  return (
    <>
      <div
        className="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/signup"}className="nav-link">Signup</Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"}className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBarLinksLoggedOut;
