import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css'; // Asegúrate de tener este archivo CSS

const ParticlesComponent = () => {
  // Crear una referencia mutable para stats
  const statsRef = useRef(null);

  useEffect(() => {
    // Función para cargar un script y ejecutar una función de callback
    const loadScript = (src, onLoad) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
          resolve();
          if (onLoad) onLoad();
        };
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    // Cargar particles.js y luego stats.js
    Promise.all([
      loadScript('/src/Pages/Incio/Background/js/particles.js'),
      loadScript('/src/Pages/Incio/Background/js/stats.js')
    ]).then(() => {
      if (window.particlesJS && window.Stats) {
        // Inicializar particles.js
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#808080"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });

        // Inicializar stats.js
        const stats = new window.Stats();
        stats.setMode(0);
        // Guardar la referencia de stats en statsRef
        statsRef.current = stats;

        const update = () => {
          stats.begin();
          stats.end();
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      } else {
        console.error('particlesJS or Stats is not loaded');
      }
    }).catch(error => {
      console.error('Error loading scripts:', error);
    });

    return () => {
      // Cleanup cuando el componente se desmonte
      if (statsRef.current) {
        document.body.removeChild(statsRef.current.domElement);
      }
    };
  }, []);

  return (
    <div id="particles-js">
      <div className="js-count-particles">
      </div>
    </div>
  )
};

export default ParticlesComponent;