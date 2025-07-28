import { Menu, User } from "lucide-react"

export function Header() {
    return(
        <header className="fixed bg-(--bg-header) w-full flex items-center justify-between p-[1rem]">
            <Menu />
            <h1 className="text-[2.125rem]"><span className='text-(--ciano)'>B</span>.A.R.</h1>
            <User />
        </header>
    )
}