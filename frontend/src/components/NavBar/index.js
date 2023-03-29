import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NavBar.css";
import { logout } from "../../store/session";
import NavBarLogo from "./NavBarLogo";
import NavBarCollapse from "./NavBarCollapse";
import NavBarLinksLoggedOut from "./NavBarLinksLoggedOut";

function NavBar() {
  const loggedIn = useSelector((state) => !!state.session.user);
  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const getLinks = () => {
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
          <NavBarLinksLoggedOut />
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container-xl">
          <NavBarLogo />
          <NavBarCollapse />
          {getLinks()}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
