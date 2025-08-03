import { Header } from "../components/common/Header"
import { Button } from "../components/common/Button"
import { AccordionItem } from "../components/common/Summary"
import Footer from "../components/common/Footer"

import projeto from '../images/projeto_fic.png'
import projeto2 from '../images/projeto_fic1.png'
import { ArrowRight } from "lucide-react"

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"

function Home() {
    const pictures = [projeto, projeto2]
    const [screenSize, setScreenSize] = useState(null)
    const [numCount, setNumCount] = useState(0)
    
    useEffect(() => {
        if(screenSize === null) {
            setScreenSize(window.innerWidth)
        }
        setScreenSize(window.innerWidth)
    }, [window.innerWidth])
    
    useEffect(() => {
        setTimeout(() => {
            if(numCount >= 1){
                setNumCount(0)
            } else {
                setNumCount(numCount + 1)
            }
        }, 5000)
    })

    return (
        <>
            <Header />
            <main className="font-light">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full"
                >
                    <section className="h-[60rem] flex flex-col items-center justify-center bg-(--section-home-one) text-(--font-color)">
                        <img src={projeto} alt="Foto do Projeto" className="rounded-[100%] w-[20rem]" />
                        <h1 className="text-[7.5rem] font-normal"><span className='text-(--ciano)'>B</span>.A.R.</h1>
                        <p className="relative mb-[1rem] z-[0] -top-[2rem] text-(--text-highlight)">Biochemical Ads Robot</p>

                        <p className="text-center font-bold text-[1.25rem] w-[20rem]">Transforme sua forma de estudar química com o BAR.</p>
                        <p className="text-center text-[0.9rem] mb-[4rem] w-[20rem]">Seu assistente inteligente para aprender Bioquímica com facilidade.</p>
                    </section>
            </motion.div>
                <section className="relative overflow-hidden h-[50rem] bg-(--bg-robot)">
                <div className={`absolute top-[-4.9rem] left-1/2 -translate-x-1/2 
                  border-l-[20rem] border-l-transparent 
                  border-r-[20rem] border-r-transparent 
                  border-b-[5rem] border-b-white w-0 h-0"`} />
                    

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                    className="relative w-full h-full bg-(--bg-robot) text-(--font-color)"
                    >
                    <div className="mt-[6rem] h-full flex flex-col items-center justify-between">
                        <div>
                            <h2 className="w-[20rem] text-(--fontw-h2) font-bold text-center mb-[1rem]">ENXERGUE A QUÍMICA COMO NUNCA ANTES!</h2>
                            <p className="w-[20rem] text-justify">O BAR (Biochemical Ads Robot) é um robô físico projetado para ajudar estudantes do ensino médio a aprenderem bioquímica de forma prática e interativa.</p>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={numCount}
                                src={pictures[numCount]}
                                alt="Fotos produto"
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0.7 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-[auto] object-cover"
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full bg-(--bg-instruct) h-[100%] flex flex-col items-center py-[5rem]"
                >
                <section className="w-[90%] h-[full] text-(--font-color)">
                    <h2 className="text-[1.5rem] font-bold">Como o B.A.R. funciona?</h2>
                    <div className="flex flex-col">
                    <AccordionItem
                    title="Instruções"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                    />
                    <AccordionItem
                    title="Lista de Componentes"
                    content="Todos os sensores, motores e chips usados no projeto..."
                    />
                    <AccordionItem
                    title="Referências"
                    content="Livros e artigos que embasaram a construção do B.A.R..."
                    />
                    </div>
                </section>
            </motion.div>
            </main>
            <Footer />
        </>
    )
}

export default Home