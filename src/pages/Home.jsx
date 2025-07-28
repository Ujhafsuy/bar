import { Header } from "../components/common/Header"
import { Button } from "../components/common/Button"
import { Link } from "react-router-dom"
import Footer from "../components/common/Footer"
import projeto from '../images/projeto_fic.png'

function Home() {
    return (
        <>
            <Header />
            <main className="font-light">
                <section className="h-screen flex flex-col items-center justify-center bg-(--section-home-one)">
                    <h1 className="text-[7.5rem] font-normal"><span className='text-(--ciano)'>B</span>.A.R.</h1>
                    <p className="">Biochemical Ads Robot</p>
                    <img src={projeto} alt="Foto do Projeto" className="rounded-[100%] w-[20rem]" />

                    <p className="text-center">Transforme sua forma de estudar química com o BAR.</p>
                    <p className="text-center">Seu assistente inteligente para aprender Bioquímica com facilidade.</p>
                    <Link to="/registro"><Button conteudo="Adquira já!" /></Link>
                </section>
                <section>
                    <h2>ENXERGUE A QUÍMICA COMO NUNCA ANTES!</h2>
                    <p>O BAR (Biochemical Ads Robot) é um robô físico projetado para ajudar estudantes do ensino médio a aprenderem bioquímica de forma prática e interativa.</p>

                    <iframe></iframe>
                </section>
                <section>
                    <h2>Como o B.A.R. funciona?</h2>
                    <details>
                        <summary>Instruções</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, rem tenetur, placeat cupiditate repellat dolore atque eveniet consequatur in accusamus qui quaerat! Sint, harum. Et ipsa accusamus nisi dignissimos a!</p>
                    </details>
                    <details>
                        <summary>Lista de Componentes</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, rem tenetur, placeat cupiditate repellat dolore atque eveniet consequatur in accusamus qui quaerat! Sint, harum. Et ipsa accusamus nisi dignissimos a!</p>
                    </details>
                    <details>
                        <summary>Referências</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, rem tenetur, placeat cupiditate repellat dolore atque eveniet consequatur in accusamus qui quaerat! Sint, harum. Et ipsa accusamus nisi dignissimos a!</p>
                    </details>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home