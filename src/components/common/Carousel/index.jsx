import { useState, useRef } from "react"

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef(null)

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
            title: "Smartphone",
            description: "Último modelo com câmera de alta resolução e bateria de longa duração",
            price: "R$ 2.499,00",
            rating: 4.8,
            image: "/placeholder.svg?height=200&width=300",
            category: "Eletrônicos",
            inStock: true,
          },
        {
            id: 3,
            title: "Poggers",
            description: "Último modelo com câmera de alta resolução e bateria de longa duração",
            price: "R$ 2.499,00",
            rating: 4.8,
            image: "/placeholder.svg?height=200&width=300",
            category: "Eletrônicos",
            inStock: true,
          }
    ]

    const getVisibleCards = () => {
        if (window.innerWidth >= 1024) return 3 // Desktop
        if (window.innerWidth >= 768) return 2 // Tablet
        return 1 // Mobile
      }
    
      const nextSlide = () => {
        const visibleCards = getVisibleCards()
        const maxIndex = itens.length - visibleCards
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }
    
      const prevSlide = () => {
        const visibleCards = getVisibleCards()
        const maxIndex = itens.length - visibleCards
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
      }
    
      const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={`star ${index < Math.floor(rating) ? "filled" : ""}`}>
            ★
          </span>
        ))
      }

    return(
        <div className="max-w-[1200px] mx-auto p-8 font-sans">
            <div className="relative flex items-center gap-4">
                <button className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 text-gray-700 text-xl shadow hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all" onClick={prevSlide}>
                &#8249;
                </button>

                <div className="flex-1 overflow-hidden rounded-xl" ref={carouselRef}>
                <div
                    className="flex transition-transform duration-300 ease-in-out gap-4"
                    style={{ transform: `translateX(-${currentIndex * (100 / getVisibleCards())}%)` }}
                >
                    {itens.map((product) => (
                    <div
                        key={product.id}
                        className="flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 ease-in-out flex flex-col w-full lg:w-[calc(33.333%-0.67rem)] md:w-[calc(50%-0.5rem)] sm:w-full hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="relative h-[200px] overflow-hidden">
                        <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="p-4 flex-1">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2 truncate">
                            {product.title}
                        </h3>
                        <p className="text-sm text-neutral-600 mb-3 line-clamp-2 leading-relaxed">
                            {product.description}
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                            {renderStars(product.rating)}
                            <span className="text-xs text-neutral-500">{product.rating} (127 avaliações)</span>
                        </div>
                        <div className="text-xl font-bold text-blue-600 mb-4">{product.price}</div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                <button className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 text-gray-700 text-xl shadow hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all" onClick={nextSlide}>
                &#8250;
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: itens.length - getVisibleCards() + 1 }, (_, index) => (
                <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                    onClick={() => setCurrentIndex(index)}
                />
                ))}
            </div>
            </div>
    )
}