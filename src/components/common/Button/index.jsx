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