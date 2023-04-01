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
        <li className="nav-item">
          <Link to={"/signup"} className="nav-link">
            Signup
          </Link>
          <Link to={"/signup"} className="nav-link">
            Signup
          </Link>
        </li>
      <button onClick={logoutUser}>Logout</button>
      </div>
    </>
  );
}

export default NavBarLinksLoggedIn;
