import { useState, useEffect } from 'react';

export default function Hero() {
    const phrases = ['Full Stack Developer', 'UI/UX Enthusiast', 'Open Source Lover', 'Problem Solver'];
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        let timer = setTimeout(() => {
            handleType();
        }, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed]);

    const handleType = () => {
        const i = loopNum % phrases.length;
        const fullText = phrases[i];

        setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
        setTypingSpeed(isDeleting ? 60 : 100);

        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <div id="hero" className="min-h-screen flex flex-col justify-center pt-32 max-w-full relative px-6 md:px-0">
            <div className="hero-glow"></div>
            <div className="hero-glow2"></div>

            <div className="max-w-[1200px] mx-auto md:px-16 w-full relative z-10">
                <div className="font-mono text-[0.8rem] text-accent tracking-[0.15em] uppercase mb-6 flex items-center gap-3 before:content-[''] before:w-[32px] before:h-[1px] before:bg-accent">
                    Disponível para novos projetos
                </div>

                <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-4">
                    Breno<br /><span className="text-gradient">Souza</span>
                </h1>

                <p className="font-mono text-[clamp(1rem,2vw,1.3rem)] text-text2 mb-8">
                    {text}<span className="inline-block w-[2px] h-[1.1em] bg-accent align-middle animate-pulse ml-1"></span>
                </p>

                <p className="max-w-[520px] text-[1.05rem] text-text2 leading-[1.7] mb-10">
                    Construo experiências digitais rápidas, acessíveis e elegantes — de Landing Page ao E-commerce.
                    Apaixonado por código limpo, performance e design que resolve problemas reais.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a href="#projects" className="px-8 py-3.5 bg-accent text-white border-none rounded-md font-sans font-bold text-[0.9rem] tracking-[0.05em] cursor-pointer no-underline transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_var(--color-glow)]">
                        Ver Projetos
                    </a>
                    <a href="#contact" className="px-8 py-3.5 bg-transparent text-text border border-border rounded-md font-sans font-bold text-[0.9rem] tracking-[0.05em] cursor-pointer no-underline transition-all duration-200 hover:border-accent hover:text-accent">
                        Falar comigo
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text3 font-mono text-[0.65rem] tracking-[0.1em] animate-bounce">
                <div className="w-[1px] h-[40px] bg-gradient-to-b from-text3 to-transparent"></div>
                scroll
            </div>
        </div>
    );
}
