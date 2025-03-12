
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const ClockCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Track mouse position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    // Hide cursor when mouse leaves the window
    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Show cursor when mouse enters the window
    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  // Calculate rotation for hour, minute, and second hands
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours * 30) + (minutes * 0.5); // 30 degrees per hour, plus 0.5 degrees per minute
  const minuteRotation = minutes * 6; // 6 degrees per minute
  const secondRotation = seconds * 6; // 6 degrees per second

  if (!visible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-50 flex items-center justify-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="relative w-8 h-8 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-md">
        {/* Clock face */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center">
          <Clock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </div>
        
        {/* Hour hand */}
        <div 
          className="absolute top-[50%] left-[50%] w-[1.5px] h-[3px] bg-black dark:bg-white origin-bottom rounded-full"
          style={{ 
            transformOrigin: '50% 50%',
            transform: `translateX(-50%) rotate(${hourRotation}deg)`,
          }}
        />
        
        {/* Minute hand */}
        <div 
          className="absolute top-[50%] left-[50%] w-[1px] h-[4px] bg-black dark:bg-white origin-bottom rounded-full"
          style={{ 
            transformOrigin: '50% 50%',
            transform: `translateX(-50%) rotate(${minuteRotation}deg)`,
          }}
        />
        
        {/* Second hand */}
        <div 
          className="absolute top-[50%] left-[50%] w-[0.5px] h-[5px] bg-red-500 origin-bottom rounded-full"
          style={{ 
            transformOrigin: '50% 50%',
            transform: `translateX(-50%) rotate(${secondRotation}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default ClockCursor;
