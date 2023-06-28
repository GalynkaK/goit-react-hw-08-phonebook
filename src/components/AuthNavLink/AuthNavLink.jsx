import { NavLink } from "react-router-dom";
import css from './AuthNavLink.module.css';

export const AuthNavLink = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};