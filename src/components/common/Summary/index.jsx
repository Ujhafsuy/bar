import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b py-[2rem]">
      <button
        className="w-full flex justify-between items-center cursor-pointer text-[1.25rem] md:text-[2rem]"
        onClick={() => setOpen(!open)}
      >
        {title}
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2"
          >
            <p className="text-[1rem] md:text-[1.5rem]">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}