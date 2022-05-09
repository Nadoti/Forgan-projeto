import React from 'react'
import TopicoComLogin from '../../components/Topico/TopicoComLogin/TopicoComLogin'
import TopicoSemLogin from '../../components/Topico/TopicoSemLogin/TopicoSemLogin'
import { UserContext } from '../../UserContext'
import { Container } from './styles'

    
const Topicos = () => {
  const {login} = React.useContext(UserContext)

  return (
    <Container>
      {login 
        ? <TopicoComLogin />
        : <TopicoSemLogin />}
    </Container>
    
  )
}

export default Topicos