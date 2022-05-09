import styled from "styled-components";



export const Content = styled.div`
  
  text-align: right;



`

export const NovoTopico = styled.button`

  border: none;
  padding: .5rem 1rem;
  background: #000;
  color: #fff;
  border-radius: 50px;
  transition: all .2s;

  &:hover {
    color: #000;
    background: #fff;
    font-weight: bold;
  }

`

export const Titulo = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

export const Button = styled.button`

  border: none;
  border-radius: 10px;
  padding: .5rem 1rem;
  background: #000;
  color: #fff;
  font-size: 1rem;
  transition: all .2s;
  font-weight: bold;

  &:hover {
    background: #fff;
    color: #000;
  }

`

export const FecharModal = styled.button`

  position: absolute;
  top: -10px;
  right: -10px;
  padding: 1rem;
  border-radius: 50%;
  border: none;
  background: #8a2424;
  color: #fff;

`

export const PostsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;

`

export const Posts = styled.button`

  border: 2px solid rgba(0,0,0,0.1);
  background: rgba(0,0,0,0.3);
  padding: 2rem 4rem;
  border-radius: 10px;
  transition: all .2s;

  &:hover {
    transform: scale(1.1);
  }

  span {
    color: red;
    font-size: 1.125rem;
  }

`