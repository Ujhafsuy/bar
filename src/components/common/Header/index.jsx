import { Menu, User, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openUser, setOpenUser] = useState(false)

    function abreMenu() {
        if( !openMenu ){
            setOpenMenu(true)
        } else {
            setOpenMenu(false)
        }
    }
    
    function abreUser() {
        if( !openUser ){
            setOpenUser(true)
        } else {
            setOpenUser(false)
        }
    }

    return(
        <header className="fixed z-[10] bg-(--bg-header) w-full">
            <div className="w-full flex items-center justify-between p-[1rem]">
                {!openMenu ? <Menu onClick={abreMenu} /> : <X onClick={abreMenu}/>}
                <h1 className="text-[2.125rem]"><span className='text-(--ciano)'>B</span>.A.R.</h1>
                {!openUser ? <User onClick={abreUser} className="rounded-[100%] w-[2.5rem] p-[0.5rem] h-[auto]" /> : <User onClick={abreUser} className="bg-(--ciano) rounded-[100%] w-[2.5rem] p-[0.5rem] h-[auto]" />}
            </div>
            <div className={`
                            absolute h-screen w-full backdrop-blur flex items-center justify-center
                            transition-opacity duration-500
                            ${openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                            `}>
                    <nav className="flex bg-(--bg-header) w-[15rem] h-[20rem] rounded-[1rem]">
                        <ol className="flex flex-col justify-between p-[2rem] w-full">
                            <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                <Link to="/instruct">Instruções</Link>
                            </li>
                            <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                <Link to="/controlusers">Admin</Link>
                            </li>
                            <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                <Link to="/materials">Materiais</Link>
                            </li>
                            <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                <Link to="/">Jogo</Link>
                            </li>
                            <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                <Link to="/team">Team</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className={`
                    transition-opacity duration-500 absolute h-screen w-full
                    backdrop-blur flex items-center justify-center
                    ${openUser ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <nav className="flex bg-(--bg-header) w-[15rem] h-[20rem] rounded-[1rem]">
                        <ol className="flex flex-col justify-center gap-[2rem] p-[2rem] w-full">
                            <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                <Link to="/registro">Sign-up</Link>
                            </li>
                            <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                <Link to="/login">Log-in</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
        </header>
    )
}