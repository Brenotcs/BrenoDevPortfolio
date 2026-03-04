export default function Experience() {
    const experiences = [
        {
            period: '2022 — Presente',
            role: 'Senior Full Stack Developer',
            company: 'NovaTech Solutions · São Paulo, BR',
            desc: 'Liderança técnica de uma equipe de 6 devs, arquitetura de microsserviços em Node.js e desenvolvimento de dashboards analíticos em React com dados em tempo real via WebSocket.'
        },
        {
            period: '2020 — 2022',
            role: 'Mid-Level Frontend Developer',
            company: 'Startup Pulse · Remote',
            desc: 'Desenvolvimento do produto SaaS principal com Next.js e TypeScript. Implementação de design system do zero, reduzindo inconsistências de UI em 80% e acelerando entregas.'
        },
        {
            period: '2019 — 2020',
            role: 'Junior Developer',
            company: 'Agência Digital Pixel · Curitiba, BR',
            desc: 'Criação de sites e landing pages para clientes de diferentes segmentos. Primeiro contato com Node.js e APIs REST, além de integração com plataformas de e-commerce.'
        },
        {
            period: '2018 — 2019',
            role: 'Estagiário de Desenvolvimento',
            company: 'Universidade Federal · Curitiba, BR',
            desc: 'Desenvolvimento de sistema interno de gestão acadêmica em PHP/Laravel, atendendo 3.000+ usuários e automatizando processos manuais do departamento.'
        }
    ];

    return (
        <section id="experience" className="py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto border-t border-border">
            <div className="mb-14 fade-in">
                <div className="font-mono text-[0.75rem] text-accent tracking-[0.15em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:w-[24px] before:h-[1px] before:bg-accent">
                    02 — Experiência
                </div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] leading-none">
                    Onde trabalhei
                </h2>
            </div>

            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-accent before:to-transparent">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pb-12 pl-6 md:pl-8 fade-in group">
                        <div className="absolute -left-[37px] md:-left-[45px] top-[6px] w-[10px] h-[10px] bg-accent rounded-full shadow-[0_0_0_4px_var(--color-bg),_0_0_0_5px_var(--color-accent)]"></div>
                        <div className="font-mono text-[0.72rem] text-accent tracking-[0.1em] mb-2">{exp.period}</div>
                        <div className="text-[1.25rem] font-bold mb-1">{exp.role}</div>
                        <div className="text-[0.9rem] text-text2 font-semibold mb-3">{exp.company}</div>
                        <div className="text-[0.9rem] text-text3 leading-[1.7] max-w-[580px]">{exp.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
