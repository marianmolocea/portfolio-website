import Particles from 'react-particles-js';
import React from 'react';
import './Particles.css'

export default function ParticlesEffect() {
  return (
    <div className="Particles">
      <Particles
        params={{
          particles: {
            number: {
              value: 90
            },
            size: {
              value: 3
            },
            move: {
              speed: 2
            },
            color: {
              value: '#abeee2'
            },
            line_linked: {
              color: '#ebfbf8'
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              }
            }
          }
        }}
      />
    </div>
  );
}
