import { Routes, Route, Router, useLocation } from "react-router-dom"
import ScrollToTop from "../components/common/ScrollToTop/index"
import Home from "../pages/Home"
import Instrucao from "../pages/Instrucao"
import Materiais from "../pages/Materiais"
import Time from "../pages/Time"
import Referencias from "../pages/Referencias"
import Game from "../pages/Game"
import { Caminho } from "../pages/Caminho"

export default function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/instruct" element={<Instrucao />} />
        <Route path="/materials" element={<Materiais/>} />
        <Route path="/team" element={<Time/>} />
        <Route path="/bio" element={<Referencias/>} />
        <Route path="/gondii-court" element={<Game/>} />
        <Route path="/trace" element={<Caminho/>} />
      </Routes>
    </>
  )
}