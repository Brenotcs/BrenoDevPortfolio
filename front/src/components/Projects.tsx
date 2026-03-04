import { useState, useEffect, useRef } from 'react';
import jcstudios from '../assets/projetos/JCstudios.png';
import prospes from '../assets/projetos/Prospes.png';
import chozzen from '../assets/projetos/chozzen.png';
import ifa from '../assets/projetos/ifa.png';
import miadvogada from '../assets/projetos/miadvogada.png';
import valedesalem from '../assets/projetos/valedesalem.png';

const projectsData = [
    {
        image: chozzen,
        gradient: 'linear-gradient(135deg, #7c6aff22, #ff6ab022)',
        tags: ['React.js', 'Tailwind CSS', 'Vite'],
        title: 'Chozzen - Landing Page',
        desc: 'Landing Page informativa para o projeto do DJ Chozzen, página com videos, animações personalizadas e redirecionamentos.',
        demo: '#',
        github: '#'
    },
    {
        image: prospes,
        gradient: 'linear-gradient(135deg, #6affcc22, #6aafff22)',
        tags: ['React.js', 'Tailwind CSS', 'Zapier'],
        title: 'Prospés - Landing Page',
        desc: 'Landing Page de alta conversão para produtos de podologia, com integração e envio de informações utilizando automações com Zapier.',
        demo: '#',
        github: '#'
    },
    {
        image: valedesalem,
        gradient: 'linear-gradient(135deg, #ff6ab022, #ffaa6a22)',
        tags: ['React.js', 'Tailwind CSS', 'Vite'],
        title: 'Vale de Salém - Loja Virtual',
        desc: 'Loja virtual voltada para venda de produtos artesanais com redirecionamentos, conversão e vendas.',
        demo: '#',
        github: '#'
    },
    {
        image: miadvogada,
        gradient: 'linear-gradient(135deg, #6a6aff22, #aa6aff22)',
        tags: ['React.js', 'Tailwind CSS', 'Supabase'],
        title: 'Milena Advogada - Site com CMS',
        desc: 'Site de advogada com foco em conversão de clientes, informativo e com CMS para gestão de conteúdo e suporte a arquivos.',
        demo: '#',
        github: '#'
    },
    {
        image: jcstudios,
        gradient: 'linear-gradient(135deg, #6affaa22, #6aff6a22)',
        tags: ['React.js', 'Tailwind CSS', 'Vite'],
        title: 'JC Studios - Landing Page',
        desc: 'Landing Page para Web Design e Cartunista.',
        demo: '#',
        github: '#'
    },
    {
        image: ifa,
        gradient: 'linear-gradient(135deg, #ffcc6a22, #ff6a6a22)',
        tags: ['React.js', 'Tailwind CSS', 'Vite'],
        title: 'IFÁ na Bahia - Landing Page',
        desc: 'Landing Page para o projeto IFÁ na Bahia, integração com videos, imagens, e texto.',
        demo: '#',
        github: '#'
    }
];

export default function Projects() {
    const [current, setCurrent] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 700) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(3);
        };

        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    const totalDots = Math.ceil(projectsData.length / visibleItems);

    // Ensure current doesn't go out of bounds on resize
    useEffect(() => {
        if (current >= totalDots) {
            setCurrent(Math.max(0, totalDots - 1));
        }
    }, [totalDots, current]);

    const goTo = (index: number) => {
        setCurrent(Math.max(0, Math.min(index, totalDots - 1)));
    };

    return (
        <section id="projects" className="py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto border-t border-border">
            <div className="mb-14 fade-in">
                <div className="font-mono text-[0.75rem] text-accent tracking-[0.15em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:w-[24px] before:h-[1px] before:bg-accent">
                    03 — Projetos
                </div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] leading-none">
                    O que construí
                </h2>
            </div>

            <div className="relative fade-in">
                <div className="overflow-hidden py-4 -my-4">
                    <div
                        ref={trackRef}
                        className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
                        style={{
                            transform: `translateX(calc(-${current * 100}% - ${current * 1.5}rem))`
                        }}
                    >
                        {projectsData.map((project, idx) => (
                            <div
                                key={idx}
                                className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_var(--color-shadow)] hover:border-accent flex-none`}
                                style={{ width: `calc((100% - ${(visibleItems - 1) * 1.5}rem) / ${visibleItems})` }}
                            >
                                <div className="w-full bg-bg3 relative overflow-hidden flex items-center justify-center group/img">
                                    <div className="absolute inset-0 opacity-50 z-10 transition-opacity duration-300 group-hover/img:opacity-0" style={{ background: project.gradient }}></div>
                                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover relative transition-transform duration-500 group-hover/img:scale-105 block" />
                                </div>
                                <div className="p-6">
                                    <div className="flex gap-1.5 flex-wrap mb-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="font-mono text-[0.65rem] px-2.5 py-1 bg-bg3 rounded text-accent">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-[1.1rem] font-bold mb-2">{project.title}</h3>
                                    <p className="text-[0.85rem] text-text2 leading-[1.6] mb-4 h-[60px] overflow-hidden text-ellipsis line-clamp-3">
                                        {project.desc}
                                    </p>
                                    <div className="flex gap-3">
                                        <a href={project.demo} className="flex items-center gap-1.5 font-mono text-[0.72rem] text-text2 no-underline transition-colors duration-200 hover:text-accent">
                                            ⬡ Demo
                                        </a>
                                        <a href={project.github} className="flex items-center gap-1.5 font-mono text-[0.72rem] text-text2 no-underline transition-colors duration-200 hover:text-accent">
                                            ⌥ GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 mt-8">
                    <button
                        onClick={() => goTo(current - 1)}
                        disabled={current === 0}
                        className="w-[44px] h-[44px] bg-surface border border-border rounded-full text-text text-[1.1rem] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-accent hover:border-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface disabled:hover:border-border disabled:hover:text-text"
                    >
                        ←
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalDots }).map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => goTo(idx)}
                                className={`h-[6px] rounded-full cursor-pointer transition-all duration-300 ${idx === current ? 'w-[24px] bg-accent' : 'w-[6px] bg-border'}`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={() => goTo(current + 1)}
                        disabled={current === totalDots - 1}
                        className="w-[44px] h-[44px] bg-surface border border-border rounded-full text-text text-[1.1rem] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-accent hover:border-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface disabled:hover:border-border disabled:hover:text-text"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
