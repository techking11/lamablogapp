"use client";

import { signIn } from "@/auth"
import styles from './loginPage.module.css'
import { cookies } from "next/headers";
// import { useSession } from "next-auth/react";

async function LoginPage() {
  // const { data, status } = useSession();
  // console.log(data, status);

  const cookiesStore = await cookies();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage
