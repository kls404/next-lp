import React from 'react';

const GlobalBackground = () => {
  // Data for floating shapes, copied from HeroSection
  const shapes = [
    { left: '10%', width: 80, height: 80, delay: '0s' },
    { left: '20%', width: 20, height: 20, delay: '2s', duration: '12s' },
    { left: '25%', width: 20, height: 20, delay: '4s' },
    { left: '40%', width: 60, height: 60, delay: '0s', duration: '18s' },
    { left: '65%', width: 20, height: 20, delay: '0s' },
    { left: '75%', width: 110, height: 110, delay: '3s' },
    { left: '85%', width: 150, height: 150, delay: '0s', duration: '11s' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="aurora-bg"></div>
      <ul className="floating-shapes">
        {shapes.map((shape, i) => (
          <li
            key={i}
            style={{
              left: shape.left,
              width: shape.width,
              height: shape.height,
              animationDelay: shape.delay,
              animationDuration: shape.duration,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default GlobalBackground;
