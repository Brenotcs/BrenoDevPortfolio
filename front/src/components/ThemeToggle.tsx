import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || 'light';
        if (currentTheme === 'dark') {
            setIsDark(true);
        } else {
            html.setAttribute('data-theme', 'light');
            html.classList.add('light');
            html.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const newTheme = isDark ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        // Also toggle a 'dark' class for tailwind standard dark mode if needed
        if (newTheme === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
        } else {
            html.classList.add('light');
            html.classList.remove('dark');
        }
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-[64px] h-[32px] bg-bg3 border border-border rounded-full cursor-pointer overflow-hidden transition-colors duration-500 shrink-0 outline-none`}
            title="Alternar tema"
        >
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className={`absolute w-[2px] h-[2px] bg-white rounded-full transition-opacity duration-500 top-[6px] left-[8px] ${isDark ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute w-[1.5px] h-[1.5px] bg-white rounded-full transition-opacity duration-500 top-[14px] left-[18px] ${isDark ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute w-[2px] h-[2px] bg-white rounded-full transition-opacity duration-500 top-[4px] left-[28px] ${isDark ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute w-[1.5px] h-[1.5px] bg-white rounded-full transition-opacity duration-500 top-[20px] left-[10px] ${isDark ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>

            <div className={`absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] bg-[#d0d8ff] rounded-full shadow-[inset_-5px_-2px_0_#a0a8ee,0_0_6px_rgba(160,168,238,0.4)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isDark ? 'opacity-100 left-[36px]' : 'opacity-0 left-[4px]'}`}></div>

            <div className={`absolute top-1/2 -translate-y-1/2 w-[24px] h-[24px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${!isDark ? 'opacity-100 left-[36px]' : 'opacity-0 left-[4px]'}`}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <div
                        key={deg}
                        className="absolute top-1/2 left-1/2 w-[2px] h-[5px] bg-[#FFD700] rounded-[1px] origin-bottom"
                        style={{ transform: `translate(-50%, -100%) rotate(${deg}deg) translateY(-7px)` }}
                    ></div>
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] bg-[#FFD700] rounded-full shadow-[0_0_8px_3px_rgba(255,215,0,0.5)]"></div>
            </div>
        </button>
    );
}
