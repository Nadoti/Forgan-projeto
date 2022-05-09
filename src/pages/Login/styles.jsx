import styled from "styled-components";


export const FormStyles = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 1rem;
  }
`

export const Titulo = styled.h1`
  font-size: 3rem;
  line-height: 1;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #606c88;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: .4rem;
  background: linear-gradient(to right, #606c88 0%, #3f4c6b  51%, #606c88  100%);
  background-size: 200% auto;
  color: #fff;
  min-width: 8rem;
  padding: .8rem 1.2rem;
  box-sizing: border-box;
  transition: .2s;

  &:hover, &:focus {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }

`