export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 px-6 md:px-16 max-w-[1000px] mx-auto border-t border-border">
            <div className="mb-14 fade-in flex flex-col items-center text-center">
                <div className="font-mono text-[0.75rem] text-accent tracking-[0.15em] uppercase mb-3 flex items-center justify-center gap-3 before:content-[''] before:w-[24px] before:h-[1px] before:bg-accent after:content-[''] after:w-[24px] after:h-[1px] after:bg-accent">
                    04 — Contato
                </div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] leading-none mb-6">
                    Vamos conversar
                </h2>
                <div className="text-text2 leading-[1.8] max-w-2xl mx-auto mb-10">
                    <p>Estou aberto a oportunidades freelance, posições full-time e projetos colaborativos. Se você tem um projeto interessante, me manda uma mensagem!</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 fade-in">
                <a href="https://github.com/alexferreira" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-5 bg-card border border-border rounded-xl no-underline text-text transition-all duration-250 hover:border-accent hover:-translate-y-1 hover:shadow-[0_4px_20px_var(--color-glow)] group">
                    <div className="w-[50px] h-[50px] bg-bg3 rounded-[12px] flex items-center justify-center text-[1.4rem] shrink-0 transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                    </div>
                    <div>
                        <div className="font-mono text-[0.72rem] text-text3 uppercase tracking-[0.1em] mb-1">GitHub</div>
                        <div className="text-[0.95rem] font-semibold break-all">github.com/alexferreira</div>
                    </div>
                    <div className="ml-auto text-text3 text-[1.1rem] transition-all duration-200 group-hover:text-accent group-hover:translate-x-1">→</div>
                </a>

                <a href="https://linkedin.com/in/alexferreira" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-5 bg-card border border-border rounded-xl no-underline text-text transition-all duration-250 hover:border-accent hover:-translate-y-1 hover:shadow-[0_4px_20px_var(--color-glow)] group">
                    <div className="w-[50px] h-[50px] bg-bg3 rounded-[12px] flex items-center justify-center text-[1.4rem] shrink-0 transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </div>
                    <div>
                        <div className="font-mono text-[0.72rem] text-text3 uppercase tracking-[0.1em] mb-1">LinkedIn</div>
                        <div className="text-[0.95rem] font-semibold break-all">linkedin.com/in/alexf</div>
                    </div>
                    <div className="ml-auto text-text3 text-[1.1rem] transition-all duration-200 group-hover:text-accent group-hover:translate-x-1">→</div>
                </a>

                <a href="tel:+5541999999999" className="flex items-center gap-5 p-5 bg-card border border-border rounded-xl no-underline text-text transition-all duration-250 hover:border-accent hover:-translate-y-1 hover:shadow-[0_4px_20px_var(--color-glow)] group">
                    <div className="w-[50px] h-[50px] bg-bg3 rounded-[12px] flex items-center justify-center text-[1.4rem] shrink-0 transition-colors duration-200 group-hover:bg-accent group-hover:text-white">📱</div>
                    <div>
                        <div className="font-mono text-[0.72rem] text-text3 uppercase tracking-[0.1em] mb-1">Telefone</div>
                        <div className="text-[0.95rem] font-semibold break-all">+55 (41) 99999-9999</div>
                    </div>
                    <div className="ml-auto text-text3 text-[1.1rem] transition-all duration-200 group-hover:text-accent group-hover:translate-x-1">→</div>
                </a>

                <a href="mailto:alex@devcraft.io" className="flex items-center gap-5 p-5 bg-card border border-border rounded-xl no-underline text-text transition-all duration-250 hover:border-accent hover:-translate-y-1 hover:shadow-[0_4px_20px_var(--color-glow)] group">
                    <div className="w-[50px] h-[50px] bg-bg3 rounded-[12px] flex items-center justify-center text-[1.4rem] shrink-0 transition-colors duration-200 group-hover:bg-accent group-hover:text-white">✉️</div>
                    <div>
                        <div className="font-mono text-[0.72rem] text-text3 uppercase tracking-[0.1em] mb-1">E-mail</div>
                        <div className="text-[0.95rem] font-semibold break-all">alex@devcraft.io</div>
                    </div>
                    <div className="ml-auto text-text3 text-[1.1rem] transition-all duration-200 group-hover:text-accent group-hover:translate-x-1">→</div>
                </a>
            </div>
        </section>
    );
}
