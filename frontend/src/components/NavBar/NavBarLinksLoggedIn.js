import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/session";

function NavBarLinksLoggedIn() {
  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <div
        className="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/uploadedcls"} className="nav-link">
              Cover Letter
            </Link>
          </li>

          {/* temporary */}
          <li className="nav-item">
            <Link to={"/generatecl"} className="nav-link">
              generatecl
            </Link>
          </li>
          {/* temporary */}
        </ul>
      </div>

      <div
        className="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >
        <button onClick={logoutUser}>Logout</button>
      </div>
    </>
  );
}

export default NavBarLinksLoggedIn;
