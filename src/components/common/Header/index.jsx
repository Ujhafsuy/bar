import { Menu, User, X, SunDim, MoonIcon } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {useTheme } from "../../../contexts/ThemeContext"

export function Header(classNameh) {

    const { theme, toggleTheme } = useTheme();

    const [openMenu, setOpenMenu] = useState(false)
    const [openUser, setOpenUser] = useState(false)

    function abreMenu() {
        if( !openMenu && !openUser ){
            setOpenMenu(true)
        } else {
            setOpenMenu(false)
        }
    }
    
    function abreUser() {
        if( !openUser && !openMenu ){
            setOpenUser(true)
        } else {
            setOpenUser(false)
        }
    }


    return(
        <header className={`fixed z-[10] bg-(--bg-header) w-full ${classNameh} dark:bg-purple-600`}>
            <div className="md:hidden">
                <div className="w-full flex items-center justify-between p-[1rem]">
                    {!openMenu ? <Menu onClick={abreMenu} className="cursor-pointer" /> : <X onClick={abreMenu} className="cursor-pointer" />}
                    <Link to="/"><h1 className="text-[2.125rem]"><span className='text-(--ciano)'>B</span>.A.R.</h1></Link>
                    {!openUser ? <User onClick={abreUser} className="rounded-[100%] w-[2.5rem] p-[0.5rem] h-[auto] cursor-pointer" /> : <User onClick={abreUser} className="bg-(--ciano) rounded-[100%] w-[2.5rem] p-[0.5rem] h-[auto] cursor-pointer" />}
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
                                    <Link to="/materials">Materiais</Link>
                                </li>
                                <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                    <Link to="/bio">Referências</Link>
                                </li>
                                <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                    <Link to="/gondii-court">Jogo</Link>
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
                                <div onClick={toggleTheme}className="flex gap-[1rem] cursor-pointer">{theme == 'light'? (<>
                        <SunDim></SunDim><span>Modo claro</span></>
                        ) : (<><MoonIcon></MoonIcon><span>Modo escuro</span></>)}
                    </div>
                                <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                    <Link to="/registro">Sign-up</Link>
                                </li>
                                <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                    <Link to="/login">Log-in</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="hidden md:flex flex-row items-center justify-center relative z-[11]">
                    <nav className="flex flex-row bg-(--bg-header) w-full h-[5rem]">
                        <ol className="flex flex-row items-center justify-around p-[1rem] w-full">
                            <li>
                                <Link to="/"><h1 className="text-[2.125rem]"><span className='text-(--ciano)'>B</span>.A.R.</h1></Link>
                            </li>
                            <li className="">
                                <Link to="/instruct">Instruções</Link>
                            </li>
                            <li className="">
                                <Link to="/materials">Materiais</Link>
                            </li>
                            <li className="">
                                <Link to="/bio">Referências</Link>
                            </li>
                            <li className="">
                                <Link to="/gondii-court">Jogo</Link>
                            </li>
                            <li className="">
                                <Link to="/team">Team</Link>
                            </li>
                            <li>
                            {!openUser ? <User onClick={abreUser} className="rounded-[100%] w-[2.5rem] p-[0.5rem] h-[auto] cursor-pointer" /> : <User onClick={abreUser} className="bg-(--ciano) rounded-[100%] w-[2.5rem] p-[0.5rem] h-[auto] cursor-pointer" />}
                            </li>
                            <div className={`
                                transition-opacity duration-500 absolute h-screen w-full top-1/2
                                backdrop-blur flex items-center justify-center z-[-1]
                                ${openUser ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                <nav className="flex bg-(--bg-header) w-[15rem] h-[20rem] rounded-[1rem]">
                                    <ol className="flex flex-col justify-center gap-[2rem] p-[2rem] w-full">
                                        <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                            <Link to="/register">Sign-up</Link>
                                        </li>
                                        <li className="py-[0.5rem] border-b border-b-(--color-border)">
                                            <Link to="/login">Log-in</Link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </ol>
                    </nav>
                    <div onClick={toggleTheme}className="flex gap-[1rem] cursor-pointer">{theme == 'light'? (<>
                        <SunDim></SunDim><span>Modo claro</span></>
                        ) : (<><MoonIcon></MoonIcon><span>Modo escuro</span></>)}
                    </div>
                </div>
        </header>
    )
}