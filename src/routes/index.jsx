import { Routes, Route, Router, useLocation } from "react-router-dom"
import ScrollToTop from "../components/common/ScrollToTop/index"
import Home from "../pages/Home"
import {Registro, Login, ConfirmEmail} from "../pages/Registro"
import Instrucao from "../pages/Instrucao"
import Materiais from "../pages/Materiais"
import Time from "../pages/Time"
import Referencias from "../pages/Referencias"
import Users from "../pages/Users"
import Game from "../pages/Game"

export default function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Registro />} />
        <Route path="/instruct" element={<Instrucao />} />
        <Route path="/materials" element={<Materiais/>} />
        <Route path="/team" element={<Time/>} />
        <Route path="/bio" element={<Referencias/>} />
        <Route path="/user" element={<Users/>} />
        <Route path="/gondii-court" element={<Game/>} />
        <Route path="/confirm" element={<ConfirmEmail/>} />
      </Routes>
    </>
  )
}