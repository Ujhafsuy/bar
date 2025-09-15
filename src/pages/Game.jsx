import Footer from "../components/common/Footer"
import { Button } from "../components/ui/button"
import { Header } from "../components/common/Header"

function Game(){
    return(
        <div>
            <Header />
            <main className={`flex flex-col items-center justify-center px-4 py-[8rem] md:w-full mx-auto game-main`}>
                <section className="flex flex-col items-center justify-center gap-[5rem] max-w-4xl">
                    <h1 className="text-7xl text-(--text-normal-color)">GOUNDII COURT</h1>

                    <Button className="w-full p-6 bg-[#010a13] text-[white] dark:bg-[#314a62] hover:bg-(--bg-count) hover:text-(--text-normal-color) cursor-pointer">JOGAR</Button>

                    <h2 className="text-(--text-normal-color) text-5xl font-regular">Sinopse</h2>

                    <p className="bg-[#d9d9d992] text-(--text-normal-color) p-[1rem] rounded-sm">Um Metroidvania que conta a história de Vaiser, um garoto de 17 anos que vive em uma floresta próxima à cidade com seus pais. Ele leva uma vida tranquila até que um acontecimento muda tudo. Um parasita acaba sofrendo uma mutação que o torna agressivo, levando-o a atacar todos os tipos de animais — inclusive seres humanos. Rapidamente, a infecção se espalha pela cidade, e os contaminados sofrem morte cerebral, passando a atacar qualquer ser não infectado.</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Game