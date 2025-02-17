
interface CardProps {
  width?: number;
  username: string;
  description: string;
  rating: number;
}

function Card({width = 70, username, description, rating}: CardProps) {
  // Controlar para que el rating no sea mayor que 5 ni menor que 0.
  if (rating > 5){
    rating = 5
  }

  if (rating < 0){
    rating = 0
  }
  // Controlar que el width no sea mayor que 80.
  if (width>80){
    width = 80;
  }

  return (
    <div className={`bg-main-6 border-main-5 border-2 w-${width} p-3`}>
      <div>
        <h3 className="font-bold">{username}</h3>
      </div>
      <div>
        <p>{description}</p>
        <p className="text-center text-main-4">{rating}</p>
      </div>
    </div>
  )
}

export default Card