export function Monitoramento({ icon: Icon, text }) {
    return (
        <div className="flex flex-col w-full bg-[var(--bg-nav-controle)] border border-[var(--border-color-controll)] rounded-lg p-6">
            <div className='flex  justify-between mb-2'>
                <h2 className='text-sm font-medium text-gray-400'>{text}</h2>
                <Icon className='text-gray-400 h-5 w-5'/>
            </div>
            <p className='text-3xl font-bold text-[var(--font-color)] mb-1'>22</p> {/* Conteúdo vem do Back-End (Configurar) */}
            <p className='text-sm text-cyan-400'>+8 desde a última verificação</p> {/* Conteúdo vem do Back-End (Configurar) */}
        </div>
    )
}