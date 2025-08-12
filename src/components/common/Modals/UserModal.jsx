"use client"

import { useState } from "react"
import { Eye, Edit } from "lucide-react"
import { Modal } from "./Modal.jsx"

export function UserModal({ isOpen, onClose, mode, user, onSubmit }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    status: user.status,
    createdAt: user.createdAt,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
    onClose()
  }

  const isViewMode = mode === "view"
  const title = isViewMode ? "Detalhes do Usuário:" : "Editar Usuário:"
  const icon = isViewMode ? <Eye className="w-4 h-4" /> : <Edit className="w-4 h-4" />

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} icon={icon}>
      <form onSubmit={handleSubmit} className="space-y-4 text-white">
        <label className="block">Nome:
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                readOnly={isViewMode}
                className={`w-full  border border-[var(--border-search)] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isViewMode ? "bg-[var(--bg-modal-off)] cursor-not-allowed" : "bg-[var(--bg-search)]"}`}
            />
        </label>
        
        <label className="block">Email:
            <input
                label="Email:"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                readOnly={isViewMode}
                className={`w-full border border-[var(--border-search)] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isViewMode ? "bg-[var(--bg-modal-off)] cursor-not-allowed" : "bg-[var(--bg-search)]"}`}
            />
        </label>

        <label className="block">Status:
            <input
                value={formData.status}
                onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
                readOnly={isViewMode}
                className={`w-full border border-[var(--border-search)] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isViewMode ? "bg-[var(--bg-modal-off)] cursor-not-allowed" : "bg-[var(--bg-search)]"}`}
            />
        </label>

        <label className="block">Criado em:
            <input
                value={formData.createdAt}
                className="w-full bg-[var(--bg-modal-off)] border border-[var(--border-search)] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-not-allowed"
            />
        </label>

        {!isViewMode && (
          <div className="flex justify-center pt-4">
            <button>
                Salvar
            </button>
          </div>
        )}
      </form>
    </Modal>
  )
}
