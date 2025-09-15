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
          titulo: "Machine Learning Applications in Environmental Monitoring: A Comprehensive Review",
          autores: "Silva, M.A., Johnson, R.K., Chen, L.",
          revista: "Journal of Environmental Technology",
          ano: 2023,
          volume: "45(3)",
          paginas: "234-251",
          doi: "10.1016/j.envtech.2023.03.015",
          url: "https://doi.org/10.1016/j.envtech.2023.03.015",
          resumo:
            "Este estudo apresenta uma revisão abrangente das aplicações de aprendizado de máquina no monitoramento ambiental, destacando metodologias inovadoras para análise de dados em tempo real.",
          categoria: "Metodologia",
          citacoes: 127,
        },
        {
          id: 2,
          titulo: "Real-time Data Processing Systems for IoT Networks: Performance Analysis",
          autores: "Thompson, K.L., Rodriguez, C.M., Park, S.H.",
          revista: "IEEE Transactions on Network Science",
          ano: 2022,
          volume: "12(8)",
          paginas: "1456-1472",
          doi: "10.1109/TNSE.2022.3187456",
          url: "https://doi.org/10.1109/TNSE.2022.3187456",
          resumo:
            "Análise comparativa de sistemas de processamento de dados em tempo real para redes IoT, com foco em latência e throughput.",
          categoria: "Tecnologia",
          citacoes: 89,
        },
        {
          id: 3,
          titulo: "Sustainable Development Through Digital Innovation: A Framework for Implementation",
          autores: "Anderson, P.J., Kumar, V., Williams, E.R.",
          revista: "Sustainability Science",
          ano: 2023,
          volume: "18(4)",
          paginas: "567-584",
          doi: "10.1007/s11625-023-01234-x",
          url: "https://doi.org/10.1007/s11625-023-01234-x",
          resumo:
            "Framework para implementação de inovações digitais voltadas ao desenvolvimento sustentável, com estudos de caso em diferentes setores.",
          categoria: "Sustentabilidade",
          citacoes: 156,
        },
        {
          id: 4,
          titulo: "User Experience Design Principles for Environmental Applications",
          autores: "Brown, A.S., Lee, J.W., Martinez, F.G.",
          revista: "International Journal of Human-Computer Studies",
          ano: 2022,
          volume: "168",
          paginas: "102-118",
          doi: "10.1016/j.ijhcs.2022.102912",
          url: "https://doi.org/10.1016/j.ijhcs.2022.102912",
          resumo:
            "Princípios de design de experiência do usuário específicos para aplicações ambientais, considerando engajamento e usabilidade.",
          categoria: "UX/UI",
          citacoes: 73,
        },
        {
          id: 5,
          titulo: "Data Visualization Techniques for Complex Environmental Datasets",
          autores: "Davis, R.M., Zhang, Y., O'Connor, M.K.",
          revista: "Computer Graphics Forum",
          ano: 2023,
          volume: "42(2)",
          paginas: "89-106",
          doi: "10.1111/cgf.14567",
          url: "https://doi.org/10.1111/cgf.14567",
          resumo:
            "Técnicas avançadas de visualização de dados para conjuntos de dados ambientais complexos, incluindo métodos interativos e em tempo real.",
          categoria: "Visualização",
          citacoes: 94,
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