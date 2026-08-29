import { signIn } from "@/auth"
import styles from './loginPage.module.css'

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.signInGoogle}>
          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button type="submit" className={styles.socialButton}>Signin with Google</button>
          </form>
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage
