import Image from 'next/image'
import styles from 'styles/login.module.css'
import logo from 'assets/logos/logo_yard_sale.svg'

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <Image
          src={logo}
          alt='logo'
          className={styles.logo}
        />

        <form action='/' className={styles.form}>
          <label htmlFor='email' className={styles.label}>
            Email address
          </label>
          <input
            type='text'
            id='email'
            placeholder='platzi@example.cm'
            className={`${styles.input} ${styles.input_email}`}
          />

          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='*********'
            className={`${styles.input} ${styles.input_password}`}
          />

          <input
            type='submit'
            value='Log in'
            className={`${styles.primary_button} ${styles.login_button}`}
          />
          <a href='/'>Forgot my password</a>
        </form>

        <button
          className={`${styles.secondary_button} ${styles.signup_button}`}
        >
          Sign up
        </button>
      </div>
    </div>
  )
}

export default Login
