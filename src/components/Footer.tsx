function Footer() {
  return (
    <div className="bg-main-3 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-center gap-3 flex flex-col">
        <div className="text-center flex gap-1">
          <img src="assets/ic--outline-copyright.svg" alt="copyright" className="w-10"/>
          <h3 className="text-h3 leading-h3 text-main-4">Copyright</h3>
        </div>
        <p className="text-paragraph leading-paragraph">C. Postal</p>
      </div>

      <img src="assets/PISTACHO.jpg" alt="Logo" className="w-30 rounded-[100px]"/>

      <div className="text-center gap-3 flex flex-col">
        <h3 className="text-h3 leading-h3 text-main-4">Social</h3>
        <p className="text-paragraph leading-paragraph">Redes Sociales</p>
        <p className="text-paragraph leading-paragraph">Email</p>
      </div>

      <div className="text-center gap-3 flex flex-col">
        <h3 className="text-h3 leading-h3 text-main-4">Legal</h3>
        <p className="text-paragraph leading-paragraph">Política de Privacidad</p>
        <p className="text-paragraph leading-paragraph">Aviso Legal</p>
        <p className="text-paragraph leading-paragraph">Política de Cookies</p>
      </div>
    </div>
  )
}

export default Footer