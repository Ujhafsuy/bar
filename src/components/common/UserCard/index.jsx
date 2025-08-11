import { Eye, Edit, Trash2 } from "lucide-react"

export function MobileUserCard({ user, onView, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-[var(--bg-card-user)] rounded-lg">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {user.name.charAt(0)}
        </div>
        <div className="">
          <h3 className="text-white font-medium text-sm truncate">{user.name}</h3>
          <p className="text-gray-400 text-xs mt-1 truncate">{user.email}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-7">
        <span className="px-2 py-1 bg-cyan-500 text-white text-sm rounded-full">{user.status}</span>
        <button>
          <Eye className="h-6 w-6 text-gray-400 hover:text-white" />
        </button>
        <button>
          <Edit className="h-6 w-6 text-gray-400 hover:text-white" />
        </button>
        <button>
          <Trash2 className="h-6 w-6 text-gray-400 hover:text-white" />
        </button>
      </div>
    </div>
  )
}
