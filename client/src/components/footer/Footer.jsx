const Footer = () => {
    return (
        <footer className="flex justify-evenly p-8 bg-gray-200 h-[160px]">
            <div>
                <span className="font-bold text-[2rem]">Let’s play</span>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor.</p>
            </div>
            <div className="flex space-x-8">
                <a href="/faq" className="text-base font-bold hover:underline">FAQ</a>
                <a href="/about-us" className="text-base font-bold hover:underline">Sobre nosotros</a>
                <a href="/contact" className="text-base font-bold hover:underline">Contacto</a>
            </div>
        </footer>
    )
}
export default Footer