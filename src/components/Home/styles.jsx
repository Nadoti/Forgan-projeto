import styled from "styled-components";


export const Main = styled.main`

  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`

export const Titulo = styled.h1`

  font-size: 3rem;
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;

  span {
    font-family: 'Tapestry';
    color: #606c88;
  }
`


export const Info = styled.p`

  text-align: center;
  font-size: 1.125rem;
  font-family: roboto;
`

export const Cadastrar = styled.div`
  text-align: center;
  margin-top: 4rem;
  a {
    font-size: 1.125rem;
    font-family: roboto;
    font-weight: bold;
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    background: #2B2929;
    color: #fff;
    transition: all .2s;

    &:hover {
      background: none;
      border: 3px solid #2B2929;
      color: #2B2929;
    }
  }

`