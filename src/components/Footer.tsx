function Footer() {
  return (
    <div className="bg-main-3 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-center gap-3 flex flex-col">
        <div className="text-center flex gap-1 font-source-code-pro">
          <img src="assets/ic--outline-copyright.svg" alt="copyright" className="w-10"/>
          <h3 className="text-h3 leading-h3 text-main-4">Copyright</h3>
        </div>
        <p className="text-paragraph leading-paragraph font-source-code-pro">C. Postal</p>
      </div>

      <img src="assets/PISTACHO.jpg" alt="Logo" className="w-30 rounded-[100px]"/>

      <div className="text-center gap-3 flex flex-col font-source-code-pro">
        <h3 className="text-h3 leading-h3 text-main-4 font-barlow-semi-condensed">Social</h3>
        <a href="#" className="text-paragraph leading-paragraph">Redes Sociales</a>
        <a href="#" className="text-paragraph leading-paragraph">Email</a>
      </div>

      <div className="text-center gap-3 flex flex-col font-source-code-pro">
        <h3 className="text-h3 leading-h3 text-main-4 font-barlow-semi-condensed">Legal</h3>
        <a href="#" className="text-paragraph leading-paragraph">Política de Privacidad</a>
        <a href="#" className="text-paragraph leading-paragraph">Aviso Legal</a>
        <a href="#" className="text-paragraph leading-paragraph">Política de Cookies</a>
      </div>
    </div>
  )
}

export default Footer