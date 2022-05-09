import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Cadastrar from "./pages/Cadastrar/Cadastrar"
import Login from "./pages/Login/Login"
import Topicos from "./pages/Topicos/Topicos"
import { GlobalStyles } from "./styles/GlobalStyle"
import { UserStorage } from "./UserContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastrar" element={<Cadastrar/>}/>
            <Route path="/topicos" element={<Topicos/>}/>
          </Routes>
        </UserStorage>
      </BrowserRouter>
      
      <GlobalStyles />
    </>
  );
}

export default App;
