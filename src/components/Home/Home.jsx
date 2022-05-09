import React from 'react'
import { Link } from 'react-router-dom'
import { Main, Titulo, Info, Cadastrar } from './styles'

const Home = () => {
  return (
    <Main>
      <Titulo>Bem vindos ao <span>Forgan</span></Titulo>
      <Info>Forgan é site com conteudos que você pode Postar sobre qualquer tipo de assunto. Para ter acesso as postagens de outros usuarios e criar seus proprios posts, cadastre-se em nossa plataforma</Info>
      <Cadastrar>
        <Link to="cadastrar" className='btn_cadastrar'>Cadastrar</Link>
      </Cadastrar>
      
    </Main>
  )
}

export default Home