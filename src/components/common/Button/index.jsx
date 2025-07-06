export function Button(props) {
    return (
        <button className={`h-[2rem] w-[4rem] bg-[#000] h-[${props.height}] w-[${props.width}] bg-[${props.background}] text-[white]`}>
            {props.conteudo}
        </button>
    )
}