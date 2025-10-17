import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"
import { ScrollVelocity } from '../components/common/ScrollVelocity/index';
import { Button } from "../components/ui/button";
import { Quote, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Referencias() {
    const referencia = [
        {
          id: 1,
          titulo: "Poluição de rios em áreas urbanas",
          autores: "GUEDES, J. de A. ",
          revista: "Ateliê Geográfico",
          ano: 2011,
          volume: "5(2)",
          paginas: "212-226",
          doi: "10.5216/ag.v5i2.15488",
          url: "https://revistas.ufg.br/atelie/article/view/15488",
          resumo:
            "Esse trabalho faz um levantamento bibliográfico sobre o problema de poluição em recursos hídricos superficiais, especialmente rios urbanos. È mostrado a evolução de pesquisas nessa temática, os principais agentes poluidores bem os parâmetros de análise em água em sedimentos.",
          categoria: "Meio Ambiente",
          citacoes: 3,
        },
        {
          id: 2,
          titulo: "Percepção ambiental: a poluição em dois rios urbanos noticiada na mídia eletrônica",
          autores: "Silva, N. J. da, Mantovano, T. ., Lansac-Tôha, F. A. ., & Rocha, . J. de R. de S. ",
          revista: "Revista em Agronegócio e Meio Ambiente - RAMA",
          ano: 2022,
          volume: "15(4)",
          paginas: "-",
          doi: "10.17765/2176-9168.2022v15n4e9362",
          url: "https://periodicos.unicesumar.edu.br/index.php/rama/article/view/9362",
          resumo:
            "Últimos anos, um intenso problema relacionado com a eutrofização devido ao lançamento de esgotos sobre os cursos d’água desses rios. A percepção ambiental da eutrofização nos rios Parnaíba e Poti noticiada na mídia eletrônica em Teresina foi verificada em três portais de notícia, utilizando a Análise de Conteúdo.",
          categoria: "Meio Ambiente",
          citacoes: 5,
        },
        {
          id: 3,
          titulo: "Estudo da Qualidade das Águas Processadas em Filtros de Barro Tradicionais Ccontrapondo os Filtros Modernos",
          autores: "Fernandes, C. V., Misael, C. G. A., Chaves, F. J. F., Santos, J. S. B., & Cavalcante, J. N. A.",
          revista: "Revista Química: Ciência, Tecnologia e Sociedade",
          ano: 2020,
          volume: "4(2)",
          paginas: "32-44",
          doi: "10.59776/2317-4978.2015.1463",
          url: "https://periodicos.apps.uern.br/index.php/QCTS/article/view/1463",
          resumo:
            "A maior parte da água disponível na Terra concentra-se nos oceanos e mares, totalizando 97,5% do volume total. Apenas 2,5% do volume total de água do planeta são doces, com destaque para a maior fatia dessa água (68,9%), formada pelas calotas polares, geleiras e neve permanente que cobrem o topo das montanhas mais altas da Terra.",
          categoria: "Meio Ambiente",
          citacoes: 9,
        },
        {
          id: 4,
          titulo: "A URBANIZAÇÃO E SEUS EFEITOS NA QUALIDADE DA ÁGUA E SAÚDE DA POPULAÇÃO URBANA DO MUNICÍPIO DE SÃO GONÇALO DO AMARANTE/RN",
          autores: "Lima, F. J. M. D.",
          revista: "-",
          ano: 2022,
          volume: "168",
          paginas: "102-118",
          doi: "10.1016/j.ijhcs.2022.102912",
          url: "-",
          resumo:
            "-",
          categoria: "Meio Ambiente",
          citacoes: 0,
        },
        {
          id: 5,
          titulo: "Fontes Difusas de Poluição da Água: Características e métodos de controle",
          autores: "Sodré, F. F.",
          revista: "AQUA",
          ano: 2012,
          volume: "42(2)",
          paginas: "9-16",
          doi: "-",
          url: "https://www.researchgate.net/profile/Fernando-Sodre/publication/259931701_Fontes_Difusas_de_Poluicao_da_Agua_Caracteristicas_e_metodos_de_controle/links/0046352e9653f35fc5000000/Fontes-Difusas-de-Poluicao-da-Agua-Caracteristicas-e-metodos-de-controle.pdf",
          resumo:
            "Inúmeras atividades antrópicas são capazes de introduzir no ambiente uma série de substâncias e materiais de diferentes características que ali não existiam ou que já estavam presentes, mas sob quantidades menores. Estas atividades contribuem para a contaminação de compartimentos ambientais.",
          categoria: "Meio Ambiente",
          citacoes: 30,
        },
      ]

    return(
        <div>
            <Header />
            <main className="py-[5rem] bg-(--bg-normal-pages) text-(--text-normal-color)">
              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                  className="relative w-full"
                  >
                <section className="flex flex-col items-center justify-center relative px-6
                                    h-[300px] md:h-[400px] lg:h-[500px]
                                    bg-(--bg-section) from-teal-700 to-teal-800 text-white"
                         style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 85%)",
                          }}>
                    <h1 className="font-bold text-3xl text-center md:text-5xl">REFERÊNCIAS</h1>
                    <p className="font-light text-center text-[1rem] md:text-justify mb-[5rem] md:mb-0">Artigos científicos e publicações que fundamentaram o desenvolvimento deste projeto, fornecendo base teórica e metodológica para as soluções implementadas.</p>
                </section>
                <section className="">
                  <div className="my-[3rem]">
                    <ScrollVelocity
                        texts={['NO QUE NOS INSPIRAMOS']} 
                        velocity={100} 
                        className="custom-scroll-text"
                        />
                    <ScrollVelocity
                        texts={['NO QUE NOS INSPIRAMOS']} 
                        velocity={200} 
                        className="custom-scroll-text text-(--bg-section)"
                        />
                    <ScrollVelocity
                        texts={['NO QUE NOS INSPIRAMOS']} 
                        velocity={100} 
                        className="custom-scroll-text"
                        />
                  </div>
                </section>
                </motion.div>
                <section>                
                <div className="space-y-8 flex flex-col items-center">
                {referencia.map((ref, index) => (
                  <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }} // só anima uma vez ao entrar 20% na tela
                  className="relative w-full flex flex-col items-center"
                  >
                    <div
                    key={ref.id}
                    className="bg-(--bg-article) rounded-lg p-[1rem] shadow-lg hover:shadow-xl transition-all duration-300 w-[90%]"
                    >
                    <div className="pb-4">
                        <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 justify-between mb-[2rem]">
                              <div className="flex items-center justify-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br bg-(--bg-count) rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {index + 1}
                                </div>
                                <div>{ref.categoria}</div>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                  <Quote className="w-[1rem]" />
                                  <span>{ref.citacoes} citações</span>
                              </div>
                            </div>
                            <div className="text-xl text-(--text-normal-color) leading-tight mb-2">{ref.titulo}</div>
                            <div className="text-[#B3B3B3] mb-3">
                              <p className="text-xl">Autores: <br className="md:hidden"/> <span className="font-light text-lg">{ref.autores}</span></p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="pt-0">
                        <div className="space-y-4">
                        <p className="text-(--text-normal-color) leading-relaxed">{ref.resumo}</p>

                        <div className="bg-(--bg-info) rounded-lg p-4 text-(--text-normal-color)">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-semibold">Revista:</span>
                                <span className="ml-2 font-light">{ref.revista}</span>
                            </div>
                            <div>
                                <span className="font-semibold">Ano:</span>
                                <span className="ml-2 font-light">{ref.ano}</span>
                            </div>
                            <div>
                                <span className="font-semibold">Volume:</span>
                                <span className="ml-2 font-light">{ref.volume}</span>
                            </div>
                            <div>
                                <span className="font-semibold">Páginas:</span>
                                <span className="ml-2 font-light">{ref.paginas}</span>
                            </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="text-sm">
                                <span className="font-semibold">DOI:</span><br className="md:hidden"/>
                                <span className="ml-2 font-light">{ref.doi}</span>
                                </div>
                                <Button
                                variant="outline"
                                size="sm"
                                className="text-[black] bg-[white] hover:bg-(--bg-count) hover:text-(--text-normal-color) w-full md:w-[auto] mt-[1rem] border-0"
                                asChild
                                >
                                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink />
                                    Acessar Artigo
                                </a>
                                </Button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                  </motion.div>
                ))}
                </div>

                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Referencias