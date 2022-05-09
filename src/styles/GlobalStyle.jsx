import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
  
  :root {
    --gray-100: #E2E7E4;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--gray-100);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }







  .react-modal-overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: #fff;
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    textarea {
      background: #ACAEAE;
      padding: .5rem;
      margin-bottom: 1rem;
      &::placeholder {
        color: #000;
        font-size: 1rem;
      }
      &:hover, &:focus {
        outline: none;
        border-color: #606c88;
        background: white;
        box-shadow: 0 0 0 3px #828EA9;
      }
    }
  }
  
`