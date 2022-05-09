import React from 'react'
import Input from '../../components/Forms/Input/Input'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import { FormStyles, Titulo, Button } from './styles'

const Login = () => {

  const email = useForm('email')
  const password = useForm()

  const {logarUsuario} = React.useContext(UserContext)
  
  async function handleLogin(event) {
    event.preventDefault()
    if(email.validate() && password.validate()) {
      logarUsuario(email.value, password.value)
    }

  }



  return (
    <FormStyles onSubmit={handleLogin}>
      <Titulo>Login</Titulo>
      <Input name="email" type="text" label="Email" onChange={({target}) => email.setEmail(target.value)} value={email} {...email}/>
      <Input name="password" type="password" label="Senha" onChange={({target}) => password.setPassword(target.value)} value={password} {...password}/>
      <Button>Entrar</Button>
    </FormStyles>
  )
}

export default Login