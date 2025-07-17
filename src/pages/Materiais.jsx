import { Header } from "../components/common/Header"
import { Carousel } from "../components/common/Carousel"
import Footer from "../components/common/Footer"

function Materiais() {
    return(
        <div>
            <Header />
            <main>
                <section>
                    <h1>LISTA DE <br /> MATERIAIS</h1>
                    <p> O B.A.R foi construido com componentes separados e da melhor qualidade.</p>
                    <Carousel />
                </section>
                <section>
                <div className="min-h-screen bg-gray-900 text-white">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Galeria de imagens (Esquerda) */}
                        <div className="space-y-4">
                            <div
                            className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"} border-blue-500`}
                            style={{
                                backgroundImage: isZoomed ? `url(${productImages[selectedImage]})` : "none",
                                backgroundSize: isZoomed ? "200%" : "auto",
                                backgroundRepeat: "no-repeat",
                            }}
                            onClick={() => setIsZoomed(!isZoomed)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => isZoomed && setIsZoomed(false)}
                            >
                            {!isZoomed && (
                                <Image
                                src={productImages[selectedImage] || "/placeholder.svg"}
                                alt="Imagem do produto"
                                fill
                                className="object-cover"
                                />
                            )}
                            {!isZoomed && (
                                <div className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full">
                                <ZoomIn className="h-5 w-5" />
                                </div>
                            )}
                            </div>

                            <div className="flex space-x-2 overflow-x-auto pb-2">
                            {productImages.map((img, index) => (
                                <button
                                key={index}
                                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === index ? "border-blue-500" : "border-gray-700"}`}
                                onClick={() => setSelectedImage(index)}
                                >
                                <Image
                                    src={img || "/placeholder.svg"}
                                    alt={`Miniatura ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full"
                                />
                                </button>
                            ))}
                            </div>
                        </div>

                        {/* Informações do produto (Centro) */}
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">PROJETO COMPLETO</h1>

                            <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4">Descrição do Produto</h2>
                            <p className="text-gray-300">
                                Este projeto completo oferece uma solução integrada com tecnologia de ponta e design moderno.
                                Desenvolvido com materiais de alta qualidade, garante durabilidade e desempenho excepcional para atender
                                às suas necessidades.
                            </p>
                            </div>

                            <div className="mt-6">
                            <Tabs defaultValue="descricao" className="w-full">
                                <TabsList className="grid grid-cols-4 mb-4">
                                <TabsTrigger value="descricao">Descrição</TabsTrigger>
                                <TabsTrigger value="especificacoes">Especificações</TabsTrigger>
                                <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
                                <TabsTrigger value="faq">FAQ</TabsTrigger>
                                </TabsList>
                                <TabsContent value="descricao" className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">Sobre este produto</h3>
                                <p className="text-gray-300">
                                    O PROJETO COMPLETO representa o que há de mais avançado em tecnologia e design. Com conectividade
                                    sem fio de última geração, este produto foi desenvolvido para proporcionar uma experiência de
                                    usuário excepcional. Fabricado com material PLA de alta qualidade, oferece durabilidade e acabamento
                                    premium.
                                </p>
                                <p className="text-gray-300 mt-2">
                                    Sua bateria de longa duração garante até 5 horas de uso contínuo, ideal para projetos que exigem
                                    mobilidade e confiabilidade. O design minimalista e moderno se adapta perfeitamente a qualquer
                                    ambiente.
                                </p>
                                </TabsContent>
                                <TabsContent value="especificacoes" className="bg-gray-800 p-4 rounded-lg">
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Material: PLA de alta resistência</li>
                                    <li>• Conectividade: Wi-Fi 6 e Bluetooth 5.2</li>
                                    <li>• Bateria: Autonomia de 5 horas</li>
                                    <li>• Dimensões: 30cm x 20cm x 15cm</li>
                                    <li>• Peso: 1,2kg</li>
                                    <li>• Garantia: 12 meses</li>
                                </ul>
                                </TabsContent>
                                <TabsContent value="avaliacoes" className="bg-gray-800 p-4 rounded-lg">
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="ml-2 text-gray-300">4.8 de 5 (120 avaliações)</span>
                                    </div>

                                    <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="review-1">
                                        <AccordionTrigger>
                                        <div className="flex items-center">
                                            <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            </div>
                                            <span className="ml-2">Maria S.</span>
                                        </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                        <p className="text-gray-300">
                                            Produto excelente! Superou todas as minhas expectativas. A bateria dura realmente as 5 horas
                                            prometidas e a qualidade do material é impressionante.
                                        </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="review-2">
                                        <AccordionTrigger>
                                        <div className="flex items-center">
                                            <div className="flex">
                                            {[1, 2, 3, 4].map((star) => (
                                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <Star className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <span className="ml-2">João P.</span>
                                        </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                        <p className="text-gray-300">
                                            Muito bom, mas poderia ter um manual mais detalhado. De qualquer forma, a conectividade é
                                            excelente e o design é muito bonito.
                                        </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    </Accordion>
                                </div>
                                </TabsContent>
                                <TabsContent value="faq" className="bg-gray-800 p-4 rounded-lg">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="faq-1">
                                    <AccordionTrigger>Como funciona a garantia?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-300">
                                        A garantia é de 12 meses contra defeitos de fabricação. Para acioná-la, basta entrar em
                                        contato com nosso suporte ao cliente com a nota fiscal em mãos.
                                        </p>
                                    </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="faq-2">
                                    <AccordionTrigger>O produto é resistente à água?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-300">
                                        O produto possui resistência a respingos (IPX4), mas não é recomendado submergi-lo ou expô-lo
                                        a grandes quantidades de água.
                                        </p>
                                    </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="faq-3">
                                    <AccordionTrigger>Como recarregar a bateria?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-300">
                                        Utilize o carregador USB-C incluso na embalagem. O tempo médio de recarga completa é de
                                        aproximadamente 2 horas.
                                        </p>
                                    </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                </TabsContent>
                            </Tabs>
                            </div>
                        </div>

                        {/* Especificações técnicas e preço (Direita) */}
                        <div className="space-y-6">
                            <Card className="bg-gray-800 border-gray-700">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-4">Especificações Técnicas</h2>
                                <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-600 p-2 rounded-full">
                                    <Wifi className="h-5 w-5" />
                                    </div>
                                    <span>Wi-Fi</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-600 p-2 rounded-full">
                                    <Bluetooth className="h-5 w-5" />
                                    </div>
                                    <span>Bluetooth</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-600 p-2 rounded-full">
                                    <Package2 className="h-5 w-5" />
                                    </div>
                                    <span>Material PLA</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-600 p-2 rounded-full">
                                    <Battery className="h-5 w-5" />
                                    </div>
                                    <span>5h Autonomia</span>
                                </div>
                                </div>
                            </div>
                            </Card>

                            <Card className="bg-gray-800 border-gray-700">
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                <span className="text-gray-300">Preço:</span>
                                <span className="text-3xl font-bold text-blue-500">R$ 999,99</span>
                                </div>

                                <div className="space-y-3">
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Adicionar ao carrinho
                                </Button>

                                <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-900/20">
                                    <Info className="mr-2 h-4 w-4" />
                                    Ver mais detalhes
                                </Button>
                                </div>

                                <div className="pt-4 border-t border-gray-700">
                                <p className="text-sm text-gray-400">Frete grátis para todo o Brasil</p>
                                <p className="text-sm text-gray-400 mt-1">Entrega estimada: 5-7 dias úteis</p>
                                </div>
                            </div>
                            </Card>
                        </div>
                        </div>
                    </div>
                </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Materiais