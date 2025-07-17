import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import {Registro, Login} from "../pages/Registro"
import Instrucao from "../pages/Instrucao"
import Materiais from "../pages/Materiais"
import Time from "../pages/Time"
import Referencias from "../pages/Referencias"
import Users from "../pages/Users"
import Controle from "../pages/Controle"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Registro />} />
      <Route path="/instruct" element={<Instrucao />} />
      <Route path="/materials" element={<Materiais/>} />
      <Route path="/team" element={<Time/>} />
      <Route path="/bio" element={<Referencias/>} />
      <Route path="/user" element={<Users/>} />
      <Route path="/controlusers" element={<Controle />}/>
    </Routes>
  )
}