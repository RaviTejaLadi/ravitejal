import React, { useEffect, useRef } from 'react';

export const GradientBackground: React.FC = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesContainerRef.current) return;

    const particlesContainer = particlesContainerRef.current;
    const particleCount = 80;

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white pointer-events-none opacity-0';

      // Random size (small)
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Initial position
      resetParticle(particle);

      particlesContainer.appendChild(particle);

      // Animate
      animateParticle(particle);
    }

    function resetParticle(particle: HTMLDivElement) {
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';

      return {
        x: posX,
        y: posY,
      };
    }

    function animateParticle(particle: HTMLDivElement) {
      // Initial position
      const pos = resetParticle(particle);

      // Random animation properties
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      // Animate with timing
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = String(Math.random() * 0.3 + 0.1);

        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        // Reset after animation completes
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      // Create particles at mouse position
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      // Create temporary particle
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white pointer-events-none';

      // Small size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position at mouse
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';

      particlesContainer.appendChild(particle);

      // Animate outward
      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';

        // Remove after animation
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);

      // Subtle movement of gradient spheres
      const spheres = document.querySelectorAll('.gradient-sphere');
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

      spheres.forEach((sphere) => {
        (sphere as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // <div className="absolute inset-0 overflow-hidden bg-[#050505]">
    //   <div className="absolute inset-0 z-1 overflow-hidden">
    //     <div className="absolute w-[40vw] h-[40vw] rounded-full blur-[60px] bg-gradient-to-r from-[rgba(255,0,128,0.8)] to-[rgba(255,102,0,0.4)] -top-[10%] -left-[10%] animate-float-1"></div>
    //     <div className="absolute w-[45vw] h-[45vw] rounded-full blur-[60px] bg-gradient-to-r from-[rgba(72,0,255,0.8)] to-[rgba(0,183,255,0.4)] -bottom-[20%] -right-[10%] animate-float-2"></div>
    //     <div className="absolute w-[30vw] h-[30vw] rounded-full blur-[60px] bg-gradient-to-r from-[rgba(133,89,255,0.5)] to-[rgba(98,216,249,0.3)] top-[60%] left-[20%] animate-float-3"></div>
    //     <div className="absolute w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(72,0,255,0.15),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 animate-pulse blur-[30px]"></div>
    //     <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-2"></div>
    //     <div className="absolute inset-0 opacity-5 z-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]"></div>
    //     <div ref={particlesContainerRef} className="absolute inset-0 z-3 pointer-events-none"></div>
    //   </div>
    // </div>
    <div className="absolute inset-0 h-full overflow-hidden bg-background">
    <div className="absolute inset-0 z-1 h-full overflow-hidden">
      {/* Lighter pink/orange gradient */}
      <div className="gradient-sphere absolute w-[40vw] h-[40vw] rounded-full blur-[60px] bg-gradient-to-r from-[rgba(255,100,150,0.5)] to-[rgba(255,150,80,0.25)] -top-[10%] -left-[10%] animate-float-1"></div>
      
      {/* Lighter blue gradient */}
      <div className="gradient-sphere absolute w-[45vw] h-[45vw] rounded-full blur-[60px] bg-gradient-to-r from-[rgba(100,80,255,0.5)] to-[rgba(80,200,255,0.25)] -bottom-[20%] -right-[10%] animate-float-2"></div>
      
      {/* Lighter purple gradient */}
      <div className="gradient-sphere absolute w-[30vw] h-[30vw] rounded-full blur-[60px] bg-gradient-to-r from-[rgba(150,120,255,0.3)] to-[rgba(130,220,255,0.2)] top-[60%] left-[20%] animate-float-3"></div>
      
      {/* Central glow - lighter */}
      <div className="absolute w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(100,80,255,0.1),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 animate-pulse blur-[30px]"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-2"></div>
      
      {/* Noise texture - lighter */}
      <div className="absolute inset-0 opacity-3 z-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]"></div>
      
      {/* Particles container */}
      <div ref={particlesContainerRef} className="absolute inset-0 z-3 pointer-events-none"></div>
    </div>
  </div>
  );
};
