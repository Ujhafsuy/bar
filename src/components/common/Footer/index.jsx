import { Instagram, AtSign } from "lucide-react"

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-(--bg-footer) text-(--font-color) py-[1.5rem]">
            <h1 className="text-[5rem] font-normal w-[90%] border-b-1 border-b-(--color-border)"><span className='text-(--ciano)'>B</span>.A.R.</h1>
            <div className="w-[90%] flex flex-none gap-[0.25rem] py-[1rem]">
                <a href="#">Suporte</a>
                <p>|</p>
                <a href="#">Contatos</a>
            </div>
            <div className="w-[90%] flex justify-end gap-[1rem]">
                <AtSign />
                <Instagram />
            </div>
        </footer>
    )
}

export default Footer