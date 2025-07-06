import { Button } from "../components/common/Button/index"
import { Link } from "react-router-dom"

export function Registro() {
    return (
        <>
            <main>
                <h1>Cadastrar-se</h1>

                <input type="text" placeholder="Nome completo"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Senha"/>

                <Link to="/instruct"><Button conteudo="Confirmar"/></Link>
                <Link to="/login"><Button conteudo="Já tenho uma conta"/></Link>
            </main>
        </>
    )
}

export function Login() {
    return (
        <>
            <main>
                <h1>Entrar</h1>

                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Senha"/>
                <Link>Esqueceu a senha?</Link>

                <Link to="/instruct"><Button conteudo="Confirmar"/></Link>
                <Link to="/signin"><Button conteudo="Cadastrar-se"/></Link>
            </main>
        </>
    )
}