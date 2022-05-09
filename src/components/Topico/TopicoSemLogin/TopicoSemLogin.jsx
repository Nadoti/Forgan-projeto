import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Titulo, Info } from './styles'

const TopicoSemLogin = () => {
  return (
    <Container>
      <Titulo>Sem Acesso</Titulo>
      <Info>Você não tem permissão para acessar o conteudo dessa página, para poder acessar faça o cadastro aqui. </Info>
      <Link to="/cadastrar">Cadastrar</Link>
    </Container>
  )
}

export default TopicoSemLogin