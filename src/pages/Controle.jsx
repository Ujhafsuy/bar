import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"
import { useState } from "react"
import { Button } from "../components/common/Button"
import { ButtonNav } from "../components/common/Button"
import { Monitoramento } from "../components/common/Monitoramento"
import { Clock, Users, Search } from "lucide-react"
import { MobileUserCard } from "../components/common/UserCard"
import { UserModal } from "../components/common/Modals/UserModal"

export function Controle() {
    const testUsers = [
        {
            id: "1",
            name: "João Vitor Reis Lima",
            email: "joao23reislima@gmail.com",
            status: "Ativo",
            createdAt: "2024-01-15",
        },
        {
            id: "2",
            name: "Maria Silva Santos",
            email: "maria.silva@gmail.com",
            status: "Ativo",
            createdAt: "2024-01-14",
        },
        {
            id: "3",
            name: "Pedro Costa Lima",
            email: "pedro.costa@gmail.com",
            status: "Inativo",
            createdAt: "2024-01-13",
        },
    ] /* Dados de teste, substituir pelos dados do Back-End */ 

    const [termoBusca, setTermoBusca] = useState("")

    {/* Modal de usuário */}
    const [userModalOpen, setUserModalOpen] = useState(false)
    const [modalMode, setModalMode] = useState("view") // 'view' ou 'edit'
    const [selectedUser, setSelectedUser] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("items")

    const openUserModal = (mode, user) => {
        setModalMode(mode)
        setSelectedUser(user)
        setUserModalOpen(true)
    }

    const handleUserSubmit = (updatedUserData) => {
        console.log("Salvar usuário:", updatedUserData)
        setUserModalOpen(false)
    }

    const filteredUsers = testUsers.filter((user) => {
        const term = (termoBusca || "").toLowerCase();
        return (
            user.name.toLowerCase().includes(term) ||
            user.email.toLowerCase().includes(term)
        );
    });



    return(
        <div>
            <Header />
            <main className="bg-gradient-to-b from-[#01152A] to-[#010A13] min-h-screen px-4 py-4 md:p-8 space-y-8">
                <section className="pt-[5.2rem]">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-5">Controle de Itens</h1>
                        <nav className="flex w-full gap-2 bg-[#1e293b] p-2 rounded-lg border border-[var(--border-color-controll)]">
                            <ButtonNav to="/controlusers" content="Usuários" ativo={true} />
                            <ButtonNav to="/controlitens" content="Itens" ativo={false} />
                        </nav>
                    </div>
                    <div className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Monitoramento icon={Clock} text='CadasCadastros nas últimas 12 horas'/>
                            <Monitoramento icon={Users} text='Cadastros totais'/>
                        </div>
                        <div className="bg-[var(--bg-nav-controle)] border border-[var(--border-color-controll)] rounded-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-white">Lista de Usuários</h2>
                                <div className="relative flex-1 sm:flex-initial flex justify-center items-center">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Buscar usuários"
                                        className="w-full sm:w-64 bg-[var(--bg-search)] border border-[var(--border-search)] rounded-lg pl-10 pr-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        value={termoBusca}
                                        onChange={(e) => setTermoBusca(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                            {filteredUsers.map((user) => (
                                <MobileUserCard
                                key={user.id}
                                user={user}
                                onView={() => openUserModal("view", user)}
                                onEdit={() => openUserModal("edit", user)}
                                onDelete={() => console.log("Excluir usuário:", user.id)}
                                />
                            ))}
                            </div>
                        </div>
                    </div>
                    {selectedUser && (
                        <UserModal
                            isOpen={userModalOpen}
                            onClose={() => setUserModalOpen(false)}
                            mode={modalMode}
                            user={selectedUser}
                            onSubmit={modalMode === "edit" ? handleUserSubmit : undefined}
                        />
                        )}
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