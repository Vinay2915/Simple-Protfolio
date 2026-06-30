const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal, .skill").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
  element.style.animationDelay = `${Math.min(index * 70, 420)}ms`;
  revealObserver.observe(element);
});
