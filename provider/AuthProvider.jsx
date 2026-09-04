import SessionProvider from "next-auth/react"

function AuthProvider({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthProvider
