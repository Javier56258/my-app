interface CardProps {
    title: string
    description: string
}

export function CardLightPink(props: CardProps) {
    const { title, description } = props
    return (
        <div className="flex flex-col items-center bg-[#E9DCDB] border border-[#E8CEA6] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow max-w-sm">
          <h2 className="text-lg font-bold text-[#475B63] mb-2 text-center">
            {title}
          </h2>
          <div>
            <p className="text-sm text-[#475B63]">
              {description}
            </p>
          </div>
          
        </div>
      )
}

export function CardDarkBlue(props: CardProps) {
    const { title, description } = props
    return (
        <div className="flex flex-col items-center bg-[#2e2c2f] border border-[#729B79] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow max-w-sm">
          <h2 className="text-lg font-bold text-[#475B63] mb-2 text-center">
            {title}
          </h2>
          <div>
            <p className="text-sm text-[#475B63]">
              {description}
            </p>
          </div>
          
        </div>
      )
}