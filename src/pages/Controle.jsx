import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"
import { useState } from "react"

function Controle() {
    const usersList = []
    const [showMenu, setShowMenu] = useState(false)

    return(
        <div>
            <Header />
            <main>
                <section>
                    <img src="" alt="Seta" />
                    <h1>Controle de Usuários</h1>

                    <div>
                        <h2>Cadastro nas últimas 12 horas</h2>
                        <div>
                            <img src="" alt="icon relogio" />
                            <strong>*Número de pessoas</strong>
                        </div>
                        <p><span>+8 </span>desde a última verificação</p>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Cadastros totais</h2>
                        <div>
                            <img src="" alt="icon pessoas" />
                            <strong>*Número de pessoas</strong>
                        </div>
                        <p><span>+24 </span>nas últimas 24 horas</p>
                    </div>
                    <div>
                        <h2>Lista de Usuários</h2>
                        <div>
                            <img src="" alt="icon pessoas" />
                            <div>
                                <h3>João Vitor Reis Lima</h3>
                                <p>joao23reislima@gmail.com</p>
                            </div>
                            <img src="" alt="menu" onClick={ () => setShowMenu(!showMenu) }/>
                        </div>
                        {showMenu && (
                                        <div>
                                        <img src="" alt="visibilidade" />
                                        <img src="" alt="editar" />
                                        <img src="" alt="excluir" />
                                        </div>
                                    )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Controle