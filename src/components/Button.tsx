type Variant = "normal" | "disabled";

interface ButtonProps {
  text: string;
  width?: number;
  variant?: Variant;
  actionClick: () => void;
}

function Button({ text, width = 40, variant = "normal", actionClick }: ButtonProps) {
  const variants: Record<Variant, string> = {
    normal: "bg-main-1 hover:bg-main-2 text-main-6 font-bold hover:text-main-5",
    disabled: "bg-main-6 text-main-5 border-main-5 border-1",
  };

  // Elimino la funcionalidad si su estado es "disabled", asignando una función que no hace nada.
  if (variant == "disabled"){
    actionClick = function () {};
  }

  // Para controlar que no se hagan botones más grandes de 80.
  if (width > 80){
    width = 80;
  }
  
  return (
    // Se pueden aplicar los estilos así: border-(--color-main-1), pero lo pilla también como: bg-main-1
    <button className={`py-3 w-${width} text-center rounded-sm ${variants[variant]} text-button leading-button source-code-pro`} onClick={actionClick}>
        {text}
    </button>
  );
  
}

export default Button;
