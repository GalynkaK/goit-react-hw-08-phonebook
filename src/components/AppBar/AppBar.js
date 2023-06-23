import { useAuth } from "components/Hooks/useAuth";
import css from './AppBar.module.css';
import { Navigation } from "components/Navigation/Navigation";
import { AuthNavLink } from "components/AuthNavLink/AuthNavLink.jsx"
import { UserMenu } from "components/UserMenu/UserMenu";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavLink />}
    </header>
  );
};