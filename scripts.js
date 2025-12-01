document.addEventListener("DOMContentLoaded", () => {
  /* --- 1. Background Particle System --- */
  const bgContainer = document.getElementById("bgAnimation");
  const particleCount = 40;

  function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random positioning and sizing
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;

    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;

    bgContainer.appendChild(particle);
  }

  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }

  /* --- 2. Navbar Scroll Effect --- */
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* --- 3. Mobile Menu Toggle --- */
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const links = navLinks.querySelectorAll("a");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // Close mobile menu when a link is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.textContent = "☰";
    });
  });

  /* --- 4. Skill Bar Animation (Intersection Observer) --- */
  const skillBars = document.querySelectorAll(".skill-progress");

  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute("data-width");
        entry.target.style.width = width;
      }
    });
  }, observerOptions);

  skillBars.forEach((bar) => observer.observe(bar));

  /* --- 5. Active Link Highlighting (ScrollSpy) --- */
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href").includes(current)) {
        a.classList.add("active");
      }
    });
  });
});
