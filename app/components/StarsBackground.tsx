"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState<
    {
      left: number;
      top: number;
      size: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 220 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 6,
    }));

    setStars(generated);
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">

        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-yellow-300 animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              opacity: 0.8,
            }}
          />
        ))}

      </div>
    </>
  );
}