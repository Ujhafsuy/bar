import { Header } from "../components/common/Header"
import Footer from "../components/common/Footer"
import { ScrollVelocity } from '../components/common/ScrollVelocity/index';
import { Button } from "../components/common/Button";

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
      const getCategoriaColor = (categoria) => {
        const colors = {
          Metodologia: "bg-orange-100 text-orange-800 border-orange-200",
          Tecnologia: "bg-blue-100 text-blue-800 border-blue-200",
          Sustentabilidade: "bg-green-100 text-green-800 border-green-200",
          "UX/UI": "bg-purple-100 text-purple-800 border-purple-200",
          Visualização: "bg-red-100 text-red-800 border-red-200",
        }
        return colors[categoria] || "bg-gray-100 text-gray-800 border-gray-200"
      }

    return(
        <div>
            <Header />
            <main>
                <section>
                    <h1>Referências Bibliográficas</h1>
                    <p>Artigos científicos e publicações que fundamentaram o desenvolvimento deste projeto, fornecendo base teórica e metodológica para as soluções implementadas.</p>
                </section>
                <section>
                <ScrollVelocity
                    texts={['NO QUE NOS INSPIRAMOS', 'NO QUE NOS INSPIRAMOS', 'NO QUE NOS INSPIRAMOS']} 
                    velocity={100} 
                    className="custom-scroll-text"
                    />

                <div className="space-y-8">
                {referencia.map((ref, index) => (
                    <div
                    key={ref.id}
                    className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-300"
                    >
                    <div className="pb-4">
                        <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {index + 1}
                            </div>
                            <div className={`${getCategoriaColor(ref.categoria)} border`}>{ref.categoria}</div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <img src="" alt="img" className="w-4 h-4" />
                                <span>{ref.citacoes} citações</span>
                            </div>
                            </div>
                            <div className="text-xl text-gray-900 leading-tight mb-2">{ref.titulo}</div>
                            <div className="text-gray-600 mb-3">
                            <strong>Autores:</strong> {ref.autores}
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="pt-0">
                        <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">{ref.resumo}</p>

                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-semibold text-gray-700">Revista:</span>
                                <span className="ml-2 text-gray-600">{ref.revista}</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Ano:</span>
                                <span className="ml-2 text-gray-600">{ref.ano}</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Volume:</span>
                                <span className="ml-2 text-gray-600">{ref.volume}</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Páginas:</span>
                                <span className="ml-2 text-gray-600">{ref.paginas}</span>
                            </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                <span className="font-semibold text-gray-700">DOI:</span>
                                <span className="ml-2 text-gray-600 font-mono">{ref.doi}</span>
                                </div>
                                <Button
                                variant="outline"
                                size="sm"
                                className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400"
                                asChild
                                >
                                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                                    <a href="#" className="w-4 h-4 mr-2" />
                                    Acessar Artigo
                                </a>
                                </Button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Referencias