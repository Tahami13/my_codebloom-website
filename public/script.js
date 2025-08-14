document.addEventListener("DOMContentLoaded", function() {
  // Initialize particles for hero section
  particlesJS("particles-js-hero", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // Initialize particles for demo section
  particlesJS("particles-js-demo", {
    particles: {
      number: { value: 120, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "bubble" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        bubble: { distance: 200, size: 15, duration: 2, opacity: 0.8, speed: 3 }
      }
    },
    retina_detect: true
  });

  // Initialize particles for contact section
  particlesJS("particles-js-contact", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // Reveal animation
  const reveals = document.querySelectorAll(".reveal");

  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkReveal);
  checkReveal();
  
  // Button hover effects
  const buttons = document.querySelectorAll('button, .btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lazy load images with fade-in (add 'loaded' class when in view)
  const images = document.querySelectorAll('img');
  function checkImages() {
    const windowHeight = window.innerHeight;
    images.forEach(img => {
      const imgTop = img.getBoundingClientRect().top;
      if (imgTop < windowHeight && !img.classList.contains('loaded')) {
        img.classList.add('loaded');
      }
    });
  }
  window.addEventListener("scroll", checkImages);
  checkImages();

  // Toggle sound for intro video
  document.addEventListener("DOMContentLoaded", function() {
  const introToggle = document.getElementById('toggleSound');
  const introVideo = document.getElementById('introVideo');

  introToggle.addEventListener('click', () => {
    // if autoplay video is paused due to browser policy, start playing
    if (introVideo.paused) {
      introVideo.play();
    }

    if (introVideo.muted) {
      introVideo.muted = false;
      introToggle.textContent = '🔊 Mute';
    } else {
      introVideo.muted = true;
      introToggle.textContent = '🔇 Unmute';
    }
  });
});

  // Toggle sound for review carousel videos
  document.querySelectorAll('.sound-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const video = button.previousElementSibling;
    if (video.muted) {
      video.muted = false;
      button.textContent = '🔊 Mute';
    } else {
      video.muted = true;
      button.textContent = '🔇 Unmute';
    }
  });
});
});