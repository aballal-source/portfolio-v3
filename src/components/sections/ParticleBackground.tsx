'use client';

import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
      await loadSlim(engine);
    }, []);
  
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 w-full h-full"
          options={{
            fullScreen: { enable: false },
            background: {
              color: "transparent",
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 2.3,
                    color: "#00FF00",
                  }
                }
              },
            },
            particles: {
              color: {
                value: "#00D2BE",
              },
              links: {
                color: "#00D2BE",
                distance: 150,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 2.15,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2.5 },
              },
            },
          }}
        />
      </div>
    );
  }