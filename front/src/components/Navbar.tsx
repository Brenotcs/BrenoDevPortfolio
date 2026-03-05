import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    return (
        <nav className="absolute md:fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-16 py-5 bg-bg/80 border-b border-border backdrop-blur-md transition-all duration-500">
            <a href="#hero" className="font-mono text-[1.1rem] font-bold text-accent tracking-tighter no-underline cursor-pointer">
                &lt;<span className="text-text">brenoDev</span>/&gt;
            </a>
            <div className="flex gap-8 items-center">
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#about" className="text-[0.85rem] font-semibold text-text2 no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent">Sobre</a>
                    <a href="#experience" className="text-[0.85rem] font-semibold text-text2 no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent">Experiência</a>
                    <a href="#projects" className="text-[0.85rem] font-semibold text-text2 no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent">Projetos</a>
                    <a href="#contact" className="text-[0.85rem] font-semibold text-text2 no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent">Contato</a>
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
}
