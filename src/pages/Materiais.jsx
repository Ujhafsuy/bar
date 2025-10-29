import { Header } from "../components/common/Header"
import { Carousel } from "../components/common/Carousel"
import Footer from "../components/common/Footer"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { motion, AnimatePresence } from "framer-motion";

import esp from "../images/esp.webp"
import motor from "../images/motor.png"
import gps from "../images/gps.png"
import bussola from "../images/bussola.png"
import ponte from "../images/ponte.png"
import reg from "../images/reg.png"
import sup from "../images/sup.png"
import projeto from "../images/projeto.jpeg"

import { Star, Wifi, Bluetooth, Battery, Package2, ZoomIn, ShoppingCart, Info, ChevronLeft, ChevronRight } from "lucide-react"

function Materiais() {
    const [selectedImage, setSelectedImage] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const materials = [
        {
          id: 1,
          name: "ESP 32",
          description: "Responsável pelo processamento e conexão do projeto",
          image: esp
        },
        {
          id: 2,
          name: "Motor com Caixa de Redução 12V 1000RPM",
          description: "Placa de desenvolvimento com WiFi e Bluetooth integrados",
          image: motor
        },
        {
          id: 3,
          name: "Módulo GPS GY-NEO6MV2 com Antena",
          description: "Placa baseada no módulo GPS NEO-6M da ublox. Acompanha antena.",
          image: gps
        },
        {
          id: 4,
          name: "Módulo Bússola Eletrônica HMC5883L",
          description: "Este é o módulo bússola eletrônica HMC5883L. Este sensor também é conhecimento como magnetômetro, pois consegue monitorar o campo magnético terrestre nos eixos X, Y e Z, e assim encontrar usa direção no espaço.",
          image: bussola
        },
        {
          id: 5,
          name: "Módulo Driver Ponte H - L298N",
          description: "Controle motores de até 2A de uma forma simples com este módulo.",
          image: ponte
        },
        {
          id: 6,
          name: "Módulo Regulador de Tensão Ajustável LM2596 3A",
          description: "Trata-se de um módulo regulador de tensão que aceita tensões de 4,5 a 28 V com saída variando de 0,8 a 20 V.",
          image: reg
        },
        {
          id: 7,
          name: "Suporte Porta 4 Pilhas Aa",
          description: "O Suporte para 4 Pilhas AA, além de um simplificado sistema de travas de modo a evitar que as pilhas sejam deslocadas do compartimento.",
          image: sup
        },
      ]
    const productImages = [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ]
  
    const handleMouseMove = (e) => {
      if (!isZoomed) return
  
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - left) / width) * 100
      const y = ((e.clientY - top) / height) * 100
  
      e.currentTarget.style.backgroundPosition = `${x}% ${y}%`
    }

    const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2) // Tablet: 2 items
      } else {
        setItemsPerPage(3) // Desktop: 3 items
      }
    }

    handleResize() // Executar na montagem
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setCurrentIndex(0)
  }, [itemsPerPage])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= materials.length ? 0 : prev + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, materials.length - itemsPerPage) : Math.max(0, prev - itemsPerPage),
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerPage)
  }

  const visibleMaterials = materials.slice(currentIndex, currentIndex + itemsPerPage)
  const totalPages = Math.ceil(materials.length / itemsPerPage)
  const currentPage = Math.floor(currentIndex / itemsPerPage)
    return(
        <div>
            <Header />
            <main className="pt-[6rem] bg-(--bg-normal-pages) text-(--text-normal-color)">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full"
                >
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">LISTA DE MATERIAIS</h1>
                        <p className="text-slate-400 text-lg">
                            O B.A.R foi construído com componentes separados
                            <br />e da melhor qualidade.
                        </p>
                        </div>

                        <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {visibleMaterials.map((material) => (
                            <Card key={material.id} className="bg-slate-800 border-slate-700 overflow-hidden">
                                <div className="aspect-square bg-slate-200 rounded-t-lg">
                                <img
                                    src={material.image}
                                    alt={material.name}
                                    className="w-full h-full object-cover"
                                />
                                </div>
                                <div className="p-4">
                                <h3 className="text-white font-semibold text-lg mb-2">{material.name}</h3>
                                <p className="text-slate-400 text-sm">{material.description}</p>
                                </div>
                            </Card>
                            ))}
                        </div>
                        </div>

                        <div className="flex justify-center items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={prevSlide} className="text-slate-400 hover:text-white p-1 cursor-pointer">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentPage ? "bg-white" : "bg-black hover:bg-slate-500"
                                }`}
                            />
                            ))}
                        </div>

                        <Button variant="ghost" size="sm" onClick={nextSlide} className="text-slate-400 hover:text-white p-1 cursor-pointer">
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                        </div>
                    </div>
                </section>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full"
                >
                <section className="py-16 px-4 bg-(--bg-normal-pages)">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">PROJETO COMPLETO</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <Card className="bg-slate-700 border-slate-600 ">
                            <div className="aspect-square rounded-lg flex items-center justify-center">
                                <img
                                src={projeto}
                                alt="Robô B.A.R"
                                className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            </Card>

                            {/* Thumbnail images */}
                            </div>

                        {/* Product Information */}
                        <div className="space-y-6">
                            <Tabs defaultValue="description" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                                <TabsTrigger
                                value="description"
                                className="data-[state=active]:bg-white data-[state=active]:text-slate-900"
                                >
                                Descrição
                                </TabsTrigger>
                                <TabsTrigger
                                value="specifications"
                                className="data-[state=active]:bg-white data-[state=active]:text-slate-900"
                                >
                                Especificações
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="description" className="mt-6">
                                <div className="text-slate-300 space-y-4">
                                <p>
                                    Este projeto completo oferece uma solução integrada com tecnologia de ponta e design inovador.
                                    Desenvolvido com materiais de alta qualidade, garante durabilidade e desempenho excepcional para
                                    atender às suas necessidades.
                                </p>
                                <p>
                                    Características principais incluem conectividade avançada, processamento eficiente e interface
                                    intuitiva para uma experiência completa.
                                </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="specifications" className="mt-6">
                                <div className="text-slate-300 space-y-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                    <span className="font-semibold">Processador:</span>
                                    <p className="text-sm">ESP32 Dual Core</p>
                                    </div>
                                    <div>
                                    <span className="font-semibold">Conectividade:</span>
                                    <p className="text-sm">WiFi</p>
                                    </div>
                                    <div>
                                    <span className="font-semibold">Alimentação:</span>
                                    <p className="text-sm">Pilhas</p>
                                    </div>
                                    <div>
                                    <span className="font-semibold">Dimensões:</span>
                                    <p className="text-sm">30 x 20 x 5 cm</p>
                                    </div>
                                </div>
                                </div>
                            </TabsContent>
                            </Tabs>
                        </div>
                        </div>
                    </div>
                </section>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}

export default Materiais