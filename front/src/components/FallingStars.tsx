import { useEffect, useState } from 'react';

export default function FallingStars() {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; animationDuration: string; animationDelay: string }[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * -50}%`,
            left: `${Math.random() * 100 + 20}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="stars-container">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDuration: star.animationDuration,
                        animationDelay: star.animationDelay,
                    }}
                ></div>
            ))}
        </div>
    );
}
