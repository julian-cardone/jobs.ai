import { Link, useLocation } from "react-router-dom";

function NavBarLinksLoggedOut() {
  const location = useLocation();

  const links = () => {
    if (location.pathname === "/signup") {
      return (
        <>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Log in
            </Link>
          </li>
        </>
      );
    } else if (location.pathname === "/login") {
      return (
        <>
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Signup
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div
        className="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >
        <ul className="navbar-nav mr-auto">{links()}</ul>
      </div>
    </>
  );
}

export default NavBarLinksLoggedOut;
