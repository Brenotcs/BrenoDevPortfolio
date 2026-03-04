export default function Experience() {
    const experiences = [
        {
            period: 'Nov 2025 — Atualmente',
            role: 'Desenvolvedor Web',
            company: 'Autônomo',
            desc: 'Como desenvolvedor web autônomo, foco na criação de interfaces de alto desempenho utilizando o ecossistema moderno do React.js, Vite e Tailwind CSS. Minha atuação é centrada no desenvolvimento de landing pages de alta conversão e sites sofisticados, priorizando sempre o SEO, a responsividade e a fluidez da experiência do usuário. Unindo o rigor técnico da Engenharia de Software à agilidade do mercado freelancer, entrego projetos com carregamento ultra-rápido e design moderno, tendo inclusive experiência na implementação de soluções com Supabase para persistência de dados e Zapier para a criação de automações inteligentes, garantindo que cada solução digital entregue resultados sólidos e fluxos de trabalho otimizados.'
        },
        {
            period: 'Jul 2025 — Out 2025',
            role: 'Gestor e Desenvolvedor de Software',
            company: 'Finex Tecnologia',
            desc: 'Responsável pela Gestão de Projetos de ponta a ponta, pelo Desenvolvimento Front-End de interfaces de usuário de alta qualidade e pela integração e manipulação de dados, garantindo que a comunicação entre a interface (Front-End) e a base de dados (Back-End) fosse eficiente e segura. Atuava na tradução de requisitos de negócio em soluções digitais completas e performáticas.'
        },
        {
            period: 'Jun 2025 — Ago 2025',
            role: 'Estágio em Desenvolvimento Web',
            company: 'Hunter Consultoria/Empreenda+',
            desc: 'Atuação no desenvolvimento Front-End, com foco em performance e escalabilidade. Desenvolvi componentes modulares e funcionalidades dinâmicas utilizando React.js, em conjunto com Tailwind, etc. (30h Semanais)'
        },
        {
            period: 'Jun 2024 — Jun 2025',
            role: 'Desenvolvedor Node-Red',
            company: 'Autônomo',
            desc: 'Gestão de Projetos e Desenvolvimento Front-End (HTML, CSS, JavaScript e frameworks), garantindo a entrega de interfaces de usuário de alta performance. Experiência técnica em arquitetura de dados (MySQL) e em Automação de Sistemas Empresariais utilizando Node-RED para otimizar processos e impulsionar a eficiência operacional.'
        },
        {
            period: 'Fev 2022 — Fev 2024',
            role: 'Estágio de Controle de Automação',
            company: 'SENAI Cimatec',
            desc: 'Profissional Full Stack de Automação com experiência em Gestão de Projetos e proficiência em Desenvolvimento Front-End (HTML, CSS, JavaScript) para interfaces de alta performance. Minha expertise técnica abrange a Automação Industrial, com programação de CLP (Ladder), e a arquitetura de sistemas IoT/IIoT via Node.js e Node-RED. Possuo experiencia em Docker para padronização e deploy de ambientes, e sólida atuação em bases de dados (MySQL/InfluxDB) e visualização de dados operacionais com Grafana, conectando o controle da máquina à inteligência de gestão. (30h Semanais)'
        },
        {
            period: 'Jan 2022 — Abr 2022',
            role: 'Desenvolvedor Web Júnior - PIBIC',
            company: 'Universidade Católica do Salvador (UCSAL)',
            desc: 'Atuação como Desenvolvedor Web (Bolsista PIBIC), focado na pesquisa aplicada e no desenvolvimento de soluções digitais. Fui responsável por todo o Front-End de projetos de pesquisa, utilizando HTML e CSS para criar interfaces funcionais e informativas. Gerenciei o backend utilizando a arquitetura serverless do Firebase (autenticação e banco de dados em tempo real) e realizei o deploy contínuo das aplicações na plataforma Heroku. Esta experiência combinou o rigor da pesquisa científica com a prática do desenvolvimento web moderno.'
        },
        {
            period: '2017 (53h)',
            role: 'Programa Miniempresa SEBRAE',
            company: 'Junior Achievement/BA',
            desc: 'Minha trajetória profissional foi impulsionada pela participação no programa Miniempresa do SEBRAE aos 17 anos. Essa experiência foi o meu primeiro contato com a gestão de negócios, onde atuei desde a concepção de um produto inovador até a sua comercialização. Vivenciar o ciclo completo de uma organização — do relacionamento com parceiros ao atendimento direto ao cliente — consolidou minha base em visão estratégica e tomada de decisão.'
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
