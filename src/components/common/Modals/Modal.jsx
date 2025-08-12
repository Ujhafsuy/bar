import { useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Modal({ isOpen, onClose, children, title, icon }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-navy-800 rounded-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md shadow-2xl border border-navy-700 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                {icon && (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                    {icon}
                  </div>
                )}
                <h2 className="text-lg sm:text-xl font-bold text-white">{title}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-navy-800 rounded-lg p-1"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}