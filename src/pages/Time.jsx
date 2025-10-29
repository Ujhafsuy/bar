import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"
import { motion, AnimatePresence } from "framer-motion";
import eduardo from '../images/eduardo.jpeg'
import lorena from '../images/lorena.jpeg'
import david from '../images/david.jpeg'
import bruno from '../images/bruno.jpeg'
import pedro from '../images/pedro.jpeg'

import { TeamMemberCard } from "../components/common/TeamMemberCard/index"

const teamMembers = [
  {
    name: "Bruno",
    instagram: "@brunomv06",
    variant: "primary",
    pic: bruno,
  },
  {
    name: "Eduardo",
    instagram: "@ujhafsuy",
    variant: "secondary",
    pic: eduardo,
  },
  {
    name: "Pedro Reis",
    instagram: "@__phrl",
    variant: "primary",
    pic: pedro,
  },
  {
    name: "David Ferreira",
    instagram: "@david_jf",
    variant: "secondary",
    pic: david,
  },
  {
    name: "Lorena Cardoso",
    instagram: "@lennasantf",
    variant: "primary",
    pic: lorena,
  },
]

function Time() {
  return (
    <div className="bg-(--bg-normal-pages)">
        <Header />
        <div className="min-h-screen py-[10rem] px-4 text-(--text-normal-color)">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-wide">TEAM</h1>

            <div className="space-y-6">
            {teamMembers.map((member, index) => (
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full"
                >
                  <TeamMemberCard key={index} name={member.name} instagram={member.instagram} variant={member.variant} avatar={member.pic} />
                </motion.div>
            ))}
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Time