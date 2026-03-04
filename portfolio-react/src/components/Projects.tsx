import { useState, useEffect, useRef } from 'react';

const projectsData = [
    {
        icon: '🛒',
        gradient: 'linear-gradient(135deg, #7c6aff22, #ff6ab022)',
        tags: ['Next.js', 'Stripe', 'PostgreSQL'],
        title: 'ShopFlow',
        desc: 'Plataforma de e-commerce completa com checkout integrado, gestão de inventário e painel admin em tempo real.',
        demo: '#',
        github: '#'
    },
    {
        icon: '📊',
        gradient: 'linear-gradient(135deg, #6affcc22, #6aafff22)',
        tags: ['React', 'D3.js', 'Python'],
        title: 'DataViz Pro',
        desc: 'Dashboard analítico com visualizações interativas de dados financeiros, exportação em PDF e alertas configuráveis.',
        demo: '#',
        github: '#'
    },
    {
        icon: '💬',
        gradient: 'linear-gradient(135deg, #ff6ab022, #ffaa6a22)',
        tags: ['Node.js', 'Socket.io', 'Redis'],
        title: 'ChatSync',
        desc: 'App de mensagens em tempo real com salas, threads, reações e suporte a arquivos. Suporta 10k conexões simultâneas.',
        demo: '#',
        github: '#'
    },
    {
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #6a6aff22, #aa6aff22)',
        tags: ['Python', 'FastAPI', 'OpenAI'],
        title: 'AIssistant',
        desc: 'Assistente de produtividade com IA que automatiza tarefas repetitivas, resume documentos e integra com Notion e Slack.',
        demo: '#',
        github: '#'
    },
    {
        icon: '🗺️',
        gradient: 'linear-gradient(135deg, #6affaa22, #6aff6a22)',
        tags: ['React Native', 'Maps API', 'Firebase'],
        title: 'RouteMaster',
        desc: 'App mobile para planejamento de rotas com IA, sugestões de paradas personalizadas e compartilhamento de viagens.',
        demo: '#',
        github: '#'
    },
    {
        icon: '🔐',
        gradient: 'linear-gradient(135deg, #ffcc6a22, #ff6a6a22)',
        tags: ['Go', 'JWT', 'Docker'],
        title: 'AuthShield',
        desc: 'Serviço de autenticação headless com OAuth2, MFA, gestão de sessões e auditoria completa de acessos.',
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
                                <div className="w-full h-[200px] bg-bg3 relative overflow-hidden flex items-center justify-center text-[3rem]">
                                    <div className="absolute inset-0" style={{ background: project.gradient }}></div>
                                    <span className="relative z-10">{project.icon}</span>
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
