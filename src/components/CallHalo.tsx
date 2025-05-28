import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HALO from '../vanta/halo';

interface CallHaloProps {
  isRinging: boolean;
  isCallActive: boolean;
}

const CallHalo: React.FC<CallHaloProps> = ({ isRinging, isCallActive }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  // Initialize Vanta effect
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1.2,
          scaleMobile: 1.2,
          backgroundColor: 0x0a0a0e,
          color1: isCallActive ? 0xff0000 : 0x598fff,
          color2: isCallActive ? 0xca061b : 0x13286a,
          size: isRinging ? 1.4 : 1.2,
          speed: isRinging ? 2.0 : 1.0,
          amplitudeFactor: isRinging ? 2.0 : 1.2,
          ringFactor: 1.0,
          xOffset: 0.0,
          yOffset: 0.5,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isRinging, isCallActive]);

  // Update effect properties when state changes
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        backgroundColor: 0x0a0a0e,
        color1: isCallActive ? 0xff0000 : 0x598fff,
        color2: isCallActive ? 0xca061b : 0x13286a,
        size: isRinging ? 1.8 : 1.5,
        speed: isRinging ? 2.0 : 1.0,
        amplitudeFactor: isRinging ? 2.5 : 1.5,
      });
    }
  }, [isRinging, isCallActive, vantaEffect]);

  return (
    <div 
      ref={vantaRef}
      className="absolute inset-0 overflow-hidden shadow-[0_0_100px_rgba(0,127,255,0.5)]"
      style={{
        opacity: 0.8,
        transition: 'opacity 0.3s ease',
        clipPath: 'ellipse(150% 70% at 50% 30%)'
      }}
    />
  );
};

export default CallHalo;