import Image from 'next/image'
import styles from 'styles/email.module.css'
import icon from 'assets/icons/email.svg'
import logo from 'assets/logos/logo_yard_sale.svg'

const Email = () => {
  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <Image src={logo} alt='logo' className={styles.logo} />

        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className={styles.email_image}>
          <Image src={icon} alt='email' />
        </div>

        <button className={`${styles.primary_button} ${styles.login_button}`}>
          Login
        </button>

        <p className={styles.resend}>
          <span>Didn't receive the email? </span>
          <a href='/'>Resend</a>
        </p>
      </div>
    </div>
  )
}

export default Email
