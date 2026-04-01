import { NavLink } from 'react-router';

import './Header.css';

export const Header = () => {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="nav-inner">
          <span className="nav-brand">JRP</span>
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
