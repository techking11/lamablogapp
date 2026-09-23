"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './authlinks.module.css'
import { signOut, useSession } from 'next-auth/react';

function AuthLinks() {
  const { status } = useSession();
  const [open, setOpen] = useState(false);
  return (
    <>
      {status != "authenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={() => signOut()}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>

          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
