import { useSelector } from "react-redux";
import "./NavBar.css";
import NavBarLogo from "./NavBarLogo";
import NavBarCollapse from "./NavBarCollapse";
import NavBarLinksLoggedOut from "./NavBarLinksLoggedOut";
import NavBarLinksLoggedIn from "./NavBarLinksLoggedIn";

function NavBar() {
  const loggedIn = useSelector((state) => !!state.session.user);

  const getLinks = () => {
    if (loggedIn) {
      return (
        <>
          <NavBarLinksLoggedIn />
        </>
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
