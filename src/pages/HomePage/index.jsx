import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

export const  HomePage = () => {
  const { authenticated, logout } = useContext(AuthContext)
  
  const handleLogout = () => {
    logout()
  }
  
  return (
    <>
      <h1>Home Autenticada</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Deslogar</button>
    </>
  )
}
