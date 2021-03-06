import Particles from 'react-tsparticles';

const Particle = () => {
    return(
      <Particles
      height="99.4vh"
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "trail",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onresize: {
              enable: true,
              density_auto: true,
              density_area: 300 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.5,
            },
            trail: {
              particles: {
                shape: {
                  type: "circle"
                }
              },
              delay: 0.05,
              quantity: 1
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      )
}

export default Particle;