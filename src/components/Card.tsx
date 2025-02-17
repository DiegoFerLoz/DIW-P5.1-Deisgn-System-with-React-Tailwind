
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
    <div className={`bg-main-6 border-main-5 border-2 w-${width} h-${width} p-3`}>
      <div className="flex gap-2 items-center">
        <img src="assets/mingcute--user-4-fill.svg" alt="UserIcon" className="w-8"/>
        <p className="font-bold text-paragraph leading-paragraph">{username}</p>
      </div>
      <div>
        <p className="text-paragraph leading-paragraph">{description}</p>
        <ul className="flex gap-4 mt-2 justify-center">
          {Array.from({length: rating}, (_, index) => (   // No preguntes, es un array, funciona. Es un for de 0 hasta el rating.
            <li key={index}>
              <img src="assets/material-symbols--star-rounded.svg" alt="Star" className="text-main-4 w-15"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card