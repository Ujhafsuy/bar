import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import {Registro, Login} from "../pages/Registro"
import Instrucao from "../pages/Instrucao"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Registro />} />
      <Route path="/instruct" element={<Instrucao />} />
    </Routes>
  )
}