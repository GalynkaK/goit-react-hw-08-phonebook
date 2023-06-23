import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        UserName
        <input className={css.label}
          type='text'
          name='name'
          placeholder='Enter user name' />
      </label>
      <label className={css.label}>
        email
        <input className={css.label}
          type='email'
          name='email'
          placeholder='Enter email' />
      </label>
      <label className={css.label}>
        password
        <input className={css.label}
          type='password'
          name='password'
          placeholder='Enter your password' />
      </label>
      <button className={css.button} type='submit'>Register</button>
    </form>
  );
};