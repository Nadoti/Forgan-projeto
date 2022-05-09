
import React from 'react'
import Input from '../../components/Forms/Input/Input'
import { UserContext } from '../../UserContext'
import { Button, FormStyles, Titulo } from './styles'

const Cadastrar = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const  {error, cadastrarUsuario} = React.useContext(UserContext)

  async function cadastrar(event) {
    event.preventDefault()
    await cadastrarUsuario(name, email, password)

  }




  return (
    <FormStyles onSubmit={cadastrar}>
      <Titulo>Cadastro</Titulo>
      <Input name="nome" type="text" label="Nome" value={name} onChange={({target}) => setName(target.value)}/>
      <Input name="email" type="text" label="Email" value={email} onChange={({target}) => setEmail(target.value)}/>
      <Input name="password" type="password" label="Senha" value={password} onChange={({target}) => setPassword(target.value)}/>
      {error && <p>{error}</p>}
      <Button>Cadastrar</Button>
    </FormStyles>
  )
}

export default Cadastrar