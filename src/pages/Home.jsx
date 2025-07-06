import { Header } from "../components/common/Header"
import { Button } from "../components/common/Button"
import { Link } from "react-router-dom"
import Footer from "../components/common/Footer"

function Home() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <img src="#" alt="Foto do Projeto" />
                    <h1><span className=''>B</span>.A.R.</h1>
                    <p>Biochemical Ads Robot</p>

                    <p>Transforme sua forma de estudar química com o BAR.</p>
                    <p>Seu assistente inteligente para aprender Bioquímica com facilidade.</p>
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