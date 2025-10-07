'use client';

import React, { useRef, useEffect, ReactNode } from 'react';

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animationDelay?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className, animationDelay, ...rest }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scroll-visible');
            observer.unobserve(entry.target); // Optional: unobserve after animation
          }
        });
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef} 
      className={`animate-scroll ${className || ''}`}
      style={{ animationDelay: animationDelay }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
