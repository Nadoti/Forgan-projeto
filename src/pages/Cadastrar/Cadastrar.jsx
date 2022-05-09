
import React from 'react'
import Input from '../../components/Forms/Input/Input'
import { UserContext } from '../../UserContext'
import { Button, FormStyles, Titulo } from './styles'

const Cadastrar = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const  {error} = React.useContext(UserContext)


  async function cadastrarUsuario(event) {
    event.preventDefault()
    try {
      const cadastro = await fetch("http://localhost:3333/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
      })
      console.log(cadastro)
    } catch (error) {
      console.log('erro')
    } finally {
      console.log('aqui')
    }
  }


  return (
    <FormStyles onSubmit={cadastrarUsuario}>
      <Titulo>Cadastro</Titulo>
      <Input name="nome" type="text" label="Nome" value={name} onChange={({target}) => setName(target.value)}/>
      <Input name="email" type="text" label="Email" value={email} onChange={({target}) => setEmail(target.value)}/>
      {error && <p>{error}</p>}
      <Input name="password" type="password" label="Senha" value={password} onChange={({target}) => setPassword(target.value)}/>
      <Button>Cadastrar</Button>
    </FormStyles>
  )
}

export default Cadastrar