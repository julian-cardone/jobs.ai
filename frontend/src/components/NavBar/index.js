import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NavBar.css";
import { logout } from "../../store/session";
import NavBarLogo from "./NavBarLogo";
import NavBarCollapse from "./NavBarCollapse";
import NavBarLinksLoggedOut from "./NavBarLinksLoggedOut";

function NavBar() {
  const loggedIn = useSelector((state) => !!state.session.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const getLinks = () => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      return null;
    }
    if (loggedIn) {
      return (
        <div className="links-nav">
          <Link to={"/tweets"}>All Tweets</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/tweets/new"}>Write a Tweet</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <>
          <nav className="navbar">
            <div className="container-xxl">
              <NavBarLogo />
              <NavBarLinksLoggedOut />
              <NavBarCollapse />
            </div>
          </nav>
        </>
      );
    }
  };

  return <>{getLinks()}</>;
}

export default NavBar;
