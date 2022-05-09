import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`

export const InputStyles = styled.input`
  border: 1px solid #eee;
  display: block;
  font-size: 1rem;
  padding: .8rem;
  border-radius: .4rem;
  background: #ACAEAE;
  transition: all .2s;

  &:hover, &:focus {
    outline: none;
    border-color: #606c88;
    background: white;
    box-shadow: 0 0 0 3px #828EA9;
  }


`

export const LabelStyles = styled.label`
  display: block;
  font-size: 1.125rem;
  line-height: 1;
  padding-bottom: .5rem;

`

export const Error = styled.p`
  color: #f31;
  font-size: .875rem;
  margin-top: .25rem;

`