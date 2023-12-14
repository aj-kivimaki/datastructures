import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Datastructures</Link>
      </h1>
      <nav className="links">
        <ul>
          <div className="link-container">
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/sort" className="link">
                Bubble / Selection Sort
              </NavLink>
            </li>
            <li>
              <NavLink to="/queue" className="link">
                Queue
              </NavLink>
            </li>
            <li>
              <NavLink to="/stack" className="link">
                Stack
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
