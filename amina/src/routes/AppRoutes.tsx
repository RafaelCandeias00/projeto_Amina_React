import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../paginas/login/Login'
import CadastroUsuario from '../paginas/cadastroUsuario/CadastroUsuario'
import Inicio from '../paginas/inicio/Inicio'
import Sobre from '../paginas/sobre/Sobre'
import Feed from '../paginas/feed/Feed'
import { UsuarioContext } from '../context/UsuarioContext'

export function AppRoutes() {
  // const { usuario } = useContext(UsuarioContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}
