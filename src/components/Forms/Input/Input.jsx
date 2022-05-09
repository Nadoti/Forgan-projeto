import React from 'react'
import { InputStyles, LabelStyles, Container, Error } from './styles'

const Input = ({name, type, label, onChange, value, error, onBlur }) => {
  return (
    <Container>
      <LabelStyles htmlFor={name}> {label} </LabelStyles>
      <InputStyles
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Error>{error}</Error>
    </Container>
  )
}

export default Input