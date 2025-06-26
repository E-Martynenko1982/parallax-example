import React, { useState, useEffect } from "react";
import './ParallaxComponent.css';

const backgroundImageUrl = 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const foregroundImageUrl = 'https://i.ibb.co/kgSgYQ38/vid-na-3d-masinu.jpg';

function ParallaxComponent() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="parallax-container">
      <div
        className="parallax-layer background"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`, // Рухається повільніше
          backgroundImage: `url(${backgroundImageUrl})`
        }}
      />
      <div
        className="parallax-layer foreground"
        style={{
          transform: `translateY(${offsetY * 0.8}px)` // Рухається швидше
        }}
      >
        <img src={foregroundImageUrl} alt="Автомобіль" />
      </div>
      <div className="parallax-content">
        <h1>Ефект паралаксу в React</h1>
        <p>Прокручуй вниз, щоб побачити магію!</p>
      </div>
    </div>
  )
}

export default ParallaxComponent;