import menu from '../../../images/list.svg'

export function Header() {
    return(
        <header>
            <img src={menu} alt="" className='w-[2.125rem] h-[1.5rem]' />
            <h1><span className=''>B</span>.A.R.</h1>
            <img src="#" alt="Foto user" />
        </header>
    )
}