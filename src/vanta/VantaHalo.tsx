import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HALO from './_halo-effect.js';

const VantaHalo: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x000a17, // Dark navy background
          color1: 0x007fff, // Primary blue
          color2: 0x0040ff, // Secondary blue
          size: 1.2,
          speed: 0.8,
          amplitudeFactor: 1.2,
          xOffset: 0.25,
          yOffset: 0.1,
          points: 12,
          maxDistance: 25.0,
          spacing: 20.0,
          showDots: false
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full opacity-80"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0,127,255,0.1) 0%, rgba(0,10,23,0.8) 100%)'
      }}
      aria-hidden="true"
    />
  );
};

export default VantaHalo;