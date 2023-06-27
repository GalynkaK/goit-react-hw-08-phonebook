import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { useAuth } from 'components/Hooks/useAuth';
import { logOut } from 'redux/auth/operations';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.logInUser}>{user.name}</span>
      </p>
      <button className={css.button}
        type='button'
        onClick={() => dispatch(logOut())}>
        Logout
        {/* <span class="material-sumbols-outlined">login</span> */}
      </button>
    </div>
  );
};