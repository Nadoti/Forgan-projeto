import styled from "styled-components";

export const HeaderStyles = styled.header`
  border-bottom: 1px solid #606c88;
  
`

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .logo {
    font-size: 2.5rem;
    font-family: 'Tapestry';
    color: #606c88;
  }

`

export const Nav = styled.nav`

  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    height: 2rem;

    li {
      

      a {
        color: #000;
        font-size: 1.125rem;
        font-family: roboto;
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 .5rem;
        position: relative;
        transition: all .3s;

        &:hover::after {
          content: "";
          width: 100%;
          height: 3px;
          background: #606c88;
          position: absolute;
          bottom: -1px;
          left: 0;
        }
      }
    }

    .btn_login {
      display: inline-block;
      background: linear-gradient(to right, #606c88 0%, #3f4c6b  51%, #606c88  100%);
      background-size: 200% auto;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      font-size: 1.125rem;
      font-weight: bold;
      color: #FFFFFF;
      transition: all .2s;
      box-shadow: 0 0 20px #eee;
      font-family: roboto;

      &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
      }
    }
  }


`
export const Deslogar = styled.button`
  display: inline-block;
  background: linear-gradient(90deg, rgba(36,0,16,1) 0%, rgba(121,9,34,1) 0%, rgba(255,0,0,0.7455357142857143) 100%);
  background-size: 200% auto;
  padding: .5rem 1.5rem;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: bold;
  color: #fff;
  transition: all .2s;
  box-shadow: 0 0 20px #eee;
  font-family: roboto;
  border: none;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`