import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"

import projeto from "../images/projeto.jpeg"
import map from "../images/map.png"
import mapPoint from "../images/map-point.png"
import mapInit from "../images/map-init.png"
import pilhas from "../images/pilhas.jpeg"

import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Menu, User, Play, Target, Brain, Clock, TrendingUp, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";

function Instrucao() {
    return (
        <div id="content" className="bg-(--bg-normal-pages)">
            <Header />
            <main className="flex flex-col items-center justify-center px-4 py-[8rem] max-w-4xl mx-auto">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">INSTRUÇÕES</h1>
                    <h2 className="text-blue-200 text-lg">Como utilizar o B.A.R.</h2>
                </section>
                <section className="mb-16 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        ?
                        </div>
                        <h2 className="text-xl font-semibold text-white">
                        O que vem?
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-[6rem]">
                        <Card className="border-[0]">
                        <CardContent className="">
                            <img
                                src={projeto}
                                alt="Robô B.A.R."
                                className="rounded-lg"
                            />
                        </CardContent>
                        </Card>

                        <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <p className="text-white text-sm">
                            B.A.R. A melhor linha de robôs para a limpeza de rios.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <p className="text-white text-sm">
                            Manual de instruções.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <p className="text-white text-sm">
                            Módulos para comunicação e interatividade de trajeto.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <p className="text-white text-sm">
                            Carregador.
                            </p>
                        </div>
                        </div>
                    </div>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full"
                >
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            1
                            </div>
                            <h2 className="text-xl font-semibold text-white">
                            Ligando e Conectando o B.A.R
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                            <CardContent className="">
                                <img
                                    src={pilhas}
                                    alt="Conectando B.A.R."
                                    className="rounded-lg"
                                />
                            </CardContent>
                            </Card>

                            <div className="flex flex-col justify-center">
                            <p className="text-white text-center mb-4">
                                Agora que você já ligou é só traçar sua rota!
                            </p>
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                                <CardContent className="">
                                    <img
                                    src={map}
                                    alt="Tutorial de conexão"
                                    className="rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                            </div>
                        </div>
                    </div>  
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full"
                >
                    <div className="w-full flex-shrink-0 mb-[6rem]">
                        <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            2
                        </div>
                        <h2 className="text-xl font-semibold text-white">
                            Configurando o B.A.R
                        </h2>
                        </div>

                        <div className="text-center mb-8">
                        <p className="text-white text-lg">
                            Seu assistente pode ser configurado de maneira simples:
                        </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="text-center">
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-4">
                            <CardContent className="">
                                <img
                                    src={mapPoint}
                                    alt="Questionário"
                                    className="rounded-lg"
                                />
                            </CardContent>
                            </Card>
                            <p className="text-white text-sm">
                            Defina sua rota, clicando nos pontos desejados para sua rota.
                            </p>
                        </div>

                        <div className="text-center">
                            <Card className="border-[0] flex items-center">
                            <CardContent className="">
                                <img
                                    src={mapInit}
                                    alt="Pronto para usar"
                                    className="rounded-lg"
                                />
                            </CardContent>
                            </Card>
                            <p className="text-white text-sm">
                            Pronto é usar o botão de "INICIAR" para o B.A.R. começar sua rota!
                            </p>
                        </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full hidden"
                >
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            3
                            </div>
                            <h2 className="text-xl font-semibold text-white">
                            Personalizar
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                            <CardContent className="">
                                <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
                                <img
                                    src="/placeholder.svg?height=250&width=250"
                                    alt="Interface de personalização"
                                    className="rounded-lg"
                                />
                                </div>
                            </CardContent>
                            </Card>

                            <div>
                            <h3 className="text-white text-lg font-semibold mb-6">
                                Seu assistente pode ser configurado de diversas maneiras:
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">
                                    Defina seus objetivos
                                </p>
                                </Card>

                                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Brain className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">
                                    Escolha o nível de aprendizado
                                </p>
                                </Card>

                                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">
                                    Programe um tempo de estudo
                                </p>
                                </Card>

                                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">
                                    Defina que pontos melhorar
                                </p>
                                </Card>
                            </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                </section>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                className="relative w-full"
                >
                    {/**<section className="mb-16 flex flex-col w-full">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                                VÍDEO PASSO A PASSO
                            </h2>
                            
                            <Card className="bg-white/10 border-[0] max-w-3xl mx-auto">
                                <CardContent className="">
                                <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <Button 
                                    size="lg" 
                                    className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30"
                                    >
                                    <Play className="w-8 h-8 text-white ml-1" />
                                    </Button>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>**/}
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}

export default Instrucao