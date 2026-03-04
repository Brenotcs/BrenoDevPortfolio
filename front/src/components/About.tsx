import fotoPerfil from '../assets/foto_perfil.jpg';

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto border-t border-border">
            <div className="mb-14 fade-in">
                <div className="font-mono text-[0.75rem] text-accent tracking-[0.15em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:w-[24px] before:h-[1px] before:bg-accent">
                    01 — Sobre mim
                </div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] leading-none">
                    Quem sou eu
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-center">
                <div className="relative fade-in">
                    <div className="w-full aspect-square max-w-[280px] md:max-w-[340px] mx-auto rounded-2xl bg-bg3 flex items-center justify-center border border-border relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,var(--color-glow),transparent_60%)] before:z-20 before:pointer-events-none">
                        <div className="absolute w-[60px] h-[60px] border-accent border-solid -top-[1px] -left-[1px] border-t-2 border-l-2 rounded-tl-[2px] z-30 pointer-events-none"></div>
                        <div className="absolute w-[60px] h-[60px] border-accent border-solid -bottom-[1px] -right-[1px] border-b-2 border-r-2 rounded-br-[2px] z-30 pointer-events-none"></div>
                        <img src={fotoPerfil} alt="Breno Souza" className="w-full h-full object-cover relative z-10" />
                    </div>
                </div>

                <div className="fade-in">
                    <p className="text-text2 leading-[1.8] text-[1rem] mb-5">
                        Meu nome é Breno, sou desenvolvedor web fullstack e apaixonado por tecnologia. Minha jornada começou com pequenos projetos e hoje crio soluções digitais modernas e eficientes.                    
                    </p>
                    <p className="text-text2 leading-[1.8] text-[1rem] mb-5">
                        Sou Tecnólogo em Análise e Desenvolvimento de Sistemas e, atualmente, dou continuidade à minha evolução acadêmica cursando Engenharia de Software.
                    </p>
                    <p className="text-text2 leading-[1.8] text-[1rem] mb-5">
                        Essa combinação me permite unir a agilidade técnica da minha primeira formação com a visão estratégica e arquitetural da engenharia, buscando sempre aprender e entregar softwares de alto impacto.
                    </p>

                    <div className="flex gap-6 md:gap-10 my-8 flex-wrap">
                        <div className="text-left">
                            <div className="text-[2.2rem] font-extrabold text-accent leading-none">5+</div>
                            <div className="text-[0.8rem] text-text3 uppercase tracking-[0.08em] font-mono mt-1">Anos de exp.</div>
                        </div>
                        <div className="text-left">
                            <div className="text-[2.2rem] font-extrabold text-accent leading-none">15+</div>
                            <div className="text-[0.8rem] text-text3 uppercase tracking-[0.08em] font-mono mt-1">Projetos</div>
                        </div>
                        <div className="text-left">
                            <div className="text-[2.2rem] font-extrabold text-accent leading-none">8+</div>
                            <div className="text-[0.8rem] text-text3 uppercase tracking-[0.08em] font-mono mt-1">Clientes</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {['React.js', 'TypeScript', 'Node.js', 'Next.js', 'Docker', 'Tailwind', 'Git', 'MySQL', 'Node-RED', 'InfluxDB', 'Grafana'].map((skill) => (
                            <span key={skill} className="px-[0.9rem] py-[0.35rem] bg-bg3 border border-border rounded-full font-mono text-[0.72rem] text-text2 transition-all duration-200 hover:border-accent hover:text-accent">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
