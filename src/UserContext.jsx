import React from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [login, setLogin] = React.useState(false)
  const [error, setError] = React.useState(null)


  const navigate = useNavigate()

  

  async function logarUsuario(email, password) {
    try {
      setError(null)
      setLoading(true)
      console.log(email, password)
      const login = await axios.post("http://localhost:3333/sessions", {email, password})
      console.log(login)
      const {token, user } = login.data
      console.log(token, user)
      setLogin(true)
      localStorage.setItem('token', token)
      localStorage.setItem('user', user.name)
      setDados(user.name)
      navigate('/')
    } catch(err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    function pegarUsuario() {
      const user = localStorage.getItem('user')
      if(user) setLogin(true)
      setDados(user)
    }
    pegarUsuario()
  })

  const deslogarUsuario = React.useCallback(async function() {
    setDados(null)
    setError(null)
    setLoading(null)
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    setLogin(false)
    navigate('/')
  },[navigate]) 



  return (
    <UserContext.Provider value={{logarUsuario, dados, loading, error, deslogarUsuario, login}}>
      {children}
    </UserContext.Provider>
  )
}
