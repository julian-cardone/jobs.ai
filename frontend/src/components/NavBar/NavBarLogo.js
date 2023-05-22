import { Link } from "react-router-dom";

function NavBarLogo() {
  return (
    <>
      <Link to={"/"} className="navbar-brand" id="bootstrap-overrides">
        <span className="fw-bold text-secondary">LOGO NAME</span>
      </Link>
    </>
  );
}

export default NavBarLogo;
