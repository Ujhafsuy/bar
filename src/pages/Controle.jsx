import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"
import { useState } from "react"
import { Button } from "../components/common/Button"

export function Controle() {
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
                        {/*fazer a estrutura de users*/}
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

export function ControleItens() {
    const itensList = [
        {img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
    ]
    const [showImage, setShowImage] = useState(false)
    const [addImage, setAddImage] = useState(false)

    const handleConfirmPhoto = () => {
        if (selectedImage) {
          setCurrentAvatar(selectedImage)
          setAddImage(false)
          setSelectedImage(null)
        }
    }
    
    const handleCancelPhoto = () => {
        setAddImage(false)
        setSelectedImage(null)
    }

    return(
        <div>
            <Header />
            <main>
                <section>
                    <img src="" alt="Seta" />
                    <h1>Controle de Itens</h1>
                        <Button />
                        <Button />
                    <div>
                        <div>
                            <div>
                                <h2>Produto</h2>
                                <Button conteudo="Editar" />
                            </div>
                            <p>Fotos:</p>
                        </div>
                        <div>
                            <img src="" alt="Imagem do Item" onClick={() => setShowImage(!showImage)} />
                            {showImage && (
                                <div className="relative flex flex-row align-items justify-center">
                                    {/*Imagens*/}
                                    <p>seta</p>
                                    <div className="bg-[gray] h-[40rem] w-[80%]"></div>
                                    <p>seta</p>
                                </div>
                            )}
                            {/*Adicionar imagens*/}
                            <div onClick={() => setAddImage(!addImage)}>
                                <img src="" alt="add imagens" />
                                {addImage && (
                                    <div>

                                    </div>
                                )}
                            </div>

                            <Button conteudo="Adicionar Imagem" />
                        </div>
                    </div>
                </section>
                
            </main>
            <Footer />
        </div>
    )
}