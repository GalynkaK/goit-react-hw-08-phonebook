import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}
      autoComplete="off">
      <label className={css.label}>email
        <input className={css.label}
          type='email'
          name='email'
          placeholder='Enter your email' />
      </label>
      <label className={css.label}>
        Password
        <input className={css.label}
          type='password'
          name='password'
          placeholder='Enter your password' />
      </label>

      <button className={css.button} type='submit'>
        Log In
      </button>
    </form>
  );
};