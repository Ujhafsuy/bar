export function Button(props) {
    return (
        <button onClick={props.onClick} className={`h-[2rem] w-[4rem] bg-[#000] h-[${props.height}] w-[${props.width}] bg-[${props.background}] text-[white]`}>
            {props.conteudo}
            {props.imagem && props.componente && (
                props.contentComponent
            )}
            {props.imagem && !props.componente && (
                <img src={props.src} alt={props.alt} />
            )}
        </button>
    )
}

import { Link } from "react-router-dom"

export function ButtonNav(props) {
const Estilizacao = props.ativo
  ? `bg-[var(--bg-button-active)] rounded-lg ring-2 ring-[var(--border-button-active)] ring-offset-2 ring-offset-[var(--bg-nav-controle)] text-[var(--text-hover)] hover:text-[var(--text-hover)]`
  : `bg-transparent text-[var(--text-color)] rounded-lg hover:ring-4 ring-[var(--bg-button-hover)] hover:bg-[var(--bg-button-hover)] hover:text-[var(--text-hover)] `
          
        return (
            <Link to={props.to}>
                <button className={`px-4 py-2 text-sm rounded-lg font-medium duration-200 ${Estilizacao}`}>
                    {props.content}
                </button>
            </Link>
    )
}