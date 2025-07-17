import { useState } from "react"
import { User, Mail, Lock, Camera, Save, Trash2, Settings, Upload, X, ChevronRight, Home } from "lucide-react"
import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"

function Users() {
    const [formData, setFormData] = useState({
        name: "João Silva",
        email: "joao.silva@email.com",
        password: "",
        confirmPassword: "",
      })
    
      const [isLoading, setIsLoading] = useState(false)
      const [isPhotoDialogOpen, setIsPhotoDialogOpen] = useState(false)
      const [selectedImage, setSelectedImage] = useState(null)
      const [currentAvatar, setCurrentAvatar] = useState(
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      )
    
      const handleInputChange = (field, value) => {
        setFormData((prev) => ({
          ...prev,
          [field]: value,
        }))
      }
    
      const handleSave = async () => {
        setIsLoading(true)
        // Simular salvamento
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsLoading(false)
        alert("Perfil atualizado com sucesso!")
      }
    
      const handleDeleteAccount = () => {
        if (window.confirm("Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.")) {
          alert("Conta excluída com sucesso!")
        }
      }
    
      const handleChangePhoto = () => {
        setIsPhotoDialogOpen(true)
      }
    
      const handleImageSelect = (event) => {
        const file = event.target.files?.[0]
        if (file) {
          // Validar tamanho do arquivo (5MB)
          if (file.size > 5 * 1024 * 1024) {
            alert("Arquivo muito grande! Máximo 5MB.")
            return
          }
    
          // Validar tipo do arquivo
          if (!file.type.startsWith("image/")) {
            alert("Por favor, selecione apenas arquivos de imagem.")
            return
          }
    
          const reader = new FileReader()
          reader.onload = (e) => {
            setSelectedImage(e.target?.result)
          }
          reader.readAsDataURL(file)
        }
      }
    
      const handleConfirmPhoto = () => {
        if (selectedImage) {
          setCurrentAvatar(selectedImage)
          setIsPhotoDialogOpen(false)
          setSelectedImage(null)
        }
      }
    
      const handleCancelPhoto = () => {
        setIsPhotoDialogOpen(false)
        setSelectedImage(null)
      }
    
      const getInitials = (name) => {
        return name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      }
    return(
        <div>
            <Header />
            <main>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              {/* Avatar */}
              <div className="relative">
                <div className="h-24 w-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                  {currentAvatar ? (
                    <img
                      src={currentAvatar || "/placeholder.svg"}
                      alt="Foto de perfil"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-semibold">
                      {getInitials(formData.name)}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleChangePhoto}
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-gray-600 hover:text-blue-600"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              <div className="text-white">
                <h1 className="text-2xl font-bold">Configurações do Perfil</h1>
                <p className="text-blue-100 mt-1">Gerencie suas informações pessoais e configurações de conta</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Campos do Formulário */}
            <div className="grid gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  Nome completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* E-mail */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-600" />
                  E-mail
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              {/* Senha */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-purple-600" />
                  Nova senha
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Digite uma nova senha"
                />
              </div>

              {/* Confirmar Senha */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-purple-600" />
                  Confirmar senha
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Confirme sua nova senha"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Save className="h-4 w-4" />
                {isLoading ? "Salvando..." : "Salvar alterações"}
              </button>

              <button
                onClick={handleDeleteAccount}
                className="sm:w-auto h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 px-6"
              >
                <Trash2 className="h-4 w-4" />
                Excluir conta
              </button>
            </div>

            {/* Nota de Segurança */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Dica de segurança:</strong> Use uma senha forte com pelo menos 8 caracteres, incluindo letras
                maiúsculas, minúsculas, números e símbolos.
              </p>
            </div>
          </div>
        </div>
        {isPhotoDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">Alterar foto de perfil</h2>
                </div>
                <button onClick={handleCancelPhoto} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Escolha uma nova imagem para seu perfil. Formatos aceitos: JPG, PNG, GIF.
              </p>
            </div>

            {/* Content do Modal */}
            <div className="p-6 space-y-6">
              {/* Preview da imagem */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full border-4 border-gray-200 overflow-hidden bg-gray-100">
                    {selectedImage || currentAvatar ? (
                      <img
                        src={selectedImage || currentAvatar}
                        alt="Preview da foto"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-semibold">
                        {getInitials(formData.name)}
                      </div>
                    )}
                  </div>
                  {selectedImage && (
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Input de arquivo */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Selecionar nova imagem</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Clique para enviar</span> ou arraste e solte
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG ou GIF (MAX. 5MB)</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageSelect} />
                  </label>
                </div>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
              <button
                onClick={handleCancelPhoto}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmPhoto}
                disabled={!selectedImage}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
            </main>
            <Footer />
        </div>
    )
}

export default Users