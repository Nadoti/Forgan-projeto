import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { HeaderStyles, Nav, Content, Deslogar } from './styles'

const Header = () => {
  
  const { dados, deslogarUsuario, login} = React.useContext(UserContext)


  return (
    <HeaderStyles>
      <Content>
        <Link to='/' className='logo'>Forgan</Link>
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="topicos">Tópicos</Link></li>
            {dados 
              ? (<Link to="/" className='btn_login'>{dados}</Link>)
              : (<Link to="login" className='btn_login'>Sign In</Link>)
            }
            {login && <Deslogar onClick={deslogarUsuario}>Deslogar</Deslogar>}
          </ul>
        </Nav>
      </Content>
    </HeaderStyles>
  )
}

export default Header