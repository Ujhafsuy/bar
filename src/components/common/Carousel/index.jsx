export function Carousel() {
    const itens = [
        {
            id: 1,
            title: "Smartphone Premium",
            description: "Último modelo com câmera de alta resolução e bateria de longa duração",
            price: "R$ 2.499,00",
            rating: 4.8,
            image: "/placeholder.svg?height=200&width=300",
            category: "Eletrônicos",
            inStock: true,
          },
        {
            id: 2,
            title: "Smartphone Premium",
            description: "Último modelo com câmera de alta resolução e bateria de longa duração",
            price: "R$ 2.499,00",
            rating: 4.8,
            image: "/placeholder.svg?height=200&width=300",
            category: "Eletrônicos",
            inStock: true,
          },
        {
            id: 3,
            title: "Smartphone Premium",
            description: "Último modelo com câmera de alta resolução e bateria de longa duração",
            price: "R$ 2.499,00",
            rating: 4.8,
            image: "/placeholder.svg?height=200&width=300",
            category: "Eletrônicos",
            inStock: true,
          }
    ]
    return(
        <div>
            {itens.map((item, len) =>{
                function ball() {
                    return Array(itens.length).fill(0).map((_, i) => (
                        <div key={i} className={`xd${i}`}>
                            <div className="h-[1rem] w-[1rem] rounded-full bg-[#D9D9D9]"></div>
                        </div>
                    ));
                }
                return(
                    <div key={item.id}>
                        <img src={item.image} alt="image item" />
                        <div>
                            <h2>{item.title}</h2>
                            <span>{item.price}</span>
                        </div>
                        <p>{item.description}</p>
                        <div>
                            <img src="" alt="seta" />
                            {ball()}
                            <img src="" alt="seta" />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}