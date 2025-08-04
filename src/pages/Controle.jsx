import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"
import { useState } from "react"
import { Button } from "../components/common/Button"
import { ButtonNav } from "../components/common/Button"

export function Controle() {
    return(
        <div>
            <Header />
            <main className="bg-gradient-to-b from-[#01152A] to-[#010A13] min-h-screen p-8 space-y-8">
                <section className="pt-[5.2rem]">
                    <h1 className="text-4xl font-semibold text-white mb-5">Controle de Itens</h1>
                    <nav className="flex w-full gap-2 bg-[#1e293b] p-2 rounded-lg">
                        <ButtonNav to="/controlusers" content="Usuários" ativo={true} />
                        <ButtonNav to="/controlitens" content="Itens" ativo={false} />
                    </nav>
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