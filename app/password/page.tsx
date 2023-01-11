import Image from 'next/image'
import logo from 'assets/logos/logo_yard_sale.svg'
import styles from 'styles/password.module.css'

const Password = () => {
  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <Image src={logo} alt='logo' className={styles.logo} width={150} />

        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new password for you account</p>

        <form action='/' className={styles.form}>
          <label htmlFor='password' className={styles.label}>
            Password
          </label>

          <input
            type='password'
            id='password'
            placeholder='*********'
            className={`${styles.input} ${styles.input_password}`}
          />

          <label htmlFor='confirm' className={styles.label}>
            Confirm password
          </label>

          <input
            type='password'
            id='confirm'
            placeholder='*********'
            className={`${styles.input} ${styles.input_password}`}
          />

          <button
            type='submit'
            className={`${styles.primary_button} ${styles.login_button}`}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  )
}

export default Password
