const projects = {
  assembly: {
    kicker: "Robotics & Automation Systems",
    title: "UR5e Collaborative Assembly System",
    description:
      "Designed a robotic assembly system that combines RTDE robot control, LLM-based reasoning, and VLM-based perception so a robot can reason about assembly tasks in a more adaptive way.",
    details: [
      "Integrated robot control with language and vision reasoning for collaborative assembly.",
      "Connected perception outputs to task planning and robot action execution.",
      "Focused on systems that can better understand human intent and changing assembly conditions."
    ]
  },
  agent: {
    kicker: "AI-enabled Robotic Agents",
    title: "Instruction-to-Action Robot Agent",
    description:
      "Built an LLM-enabled robotic agent that interprets human instructions and converts them into robot actions, with planning logic for adaptive coordination across robotic systems.",
    details: [
      "Fine-tuned machine-learning models to improve context understanding and task reasoning.",
      "Developed multi-agent planning logic for task allocation, coordination, and execution.",
      "Connected high-level human language to lower-level robot behaviors."
    ]
  },
  vision: {
    kicker: "Computer Vision",
    title: "Adaptive Vision for Novel Objects",
    description:
      "Developed an adaptive vision system that combines 3D point-cloud processing with VLM reasoning for identifying novel objects in robotic workflows.",
    details: [
      "Worked with 3D point-cloud processing for spatial object understanding.",
      "Designed and evaluated YOLO and SAM-based object detection methods.",
      "Explored perception pipelines that help robots generalize beyond fixed object sets."
    ]
  },
  mpc: {
    kicker: "Planning & Control",
    title: "RRT-based Model Predictive Control",
    description:
      "Developed an RRT-based Model Predictive Control framework for path planning and trajectory optimization in robotic systems.",
    details: [
      "Used sampling-based planning concepts to produce feasible motion paths.",
      "Applied model predictive control ideas for trajectory optimization.",
      "Built toward robotic motion that is both efficient and responsive to constraints."
    ]
  }
};

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = [...document.querySelectorAll(".nav-link")];
const indicator = document.querySelector(".nav-indicator");

function moveIndicator(link) {
  if (!link || !indicator) return;
  indicator.style.width = `${link.offsetWidth}px`;
  indicator.style.transform = `translateX(${link.offsetLeft - 4}px)`;
  indicator.style.opacity = "1";
}

function setActiveNav(id) {
  const active = navLinks.find((link) => link.getAttribute("href") === `#${id}`) || navLinks[0];
  navLinks.forEach((link) => link.classList.toggle("is-active", link === active));
  moveIndicator(active);
}

window.addEventListener("load", () => moveIndicator(document.querySelector(".nav-link.is-active")));
window.addEventListener("resize", () => moveIndicator(document.querySelector(".nav-link.is-active")));

const sections = [...document.querySelectorAll("section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveNav(visible.target.id);
  },
  { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.2, 0.4, 0.6] }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll("[data-scroll-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
  });
});

const modal = document.getElementById("project-modal");
const modalKicker = document.getElementById("modal-kicker");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalList = document.getElementById("modal-list");

function openProjectModal(projectId) {
  const project = projects[projectId];
  if (!project || !modal) return;
  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalList.innerHTML = project.details.map((detail) => `<li>${detail}</li>`).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal?.classList.remove("is-open");
  modal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => openProjectModal(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectModal(card.dataset.project);
    }
  });
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

const canvas = document.getElementById("hero-canvas");
const context = canvas?.getContext("2d");
const pointer = { x: 0, y: 0, active: false };
let particles = [];

function resizeCanvas() {
  if (!canvas || !context) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(canvas.offsetWidth * ratio);
  canvas.height = Math.floor(canvas.offsetHeight * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = Math.max(34, Math.min(76, Math.floor(canvas.offsetWidth / 18)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.offsetWidth,
    y: Math.random() * canvas.offsetHeight,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32,
    radius: Math.random() * 2.2 + 1.4
  }));
}

function drawCanvas() {
  if (!canvas || !context) return;
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  context.clearRect(0, 0, width, height);

  const dark = root.classList.contains("dark");
  context.fillStyle = dark ? "rgba(217, 192, 108, 0.78)" : "rgba(139, 117, 46, 0.62)";
  context.strokeStyle = dark ? "rgba(217, 192, 108, 0.16)" : "rgba(57, 111, 92, 0.18)";

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;

    if (pointer.active) {
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 150) {
        particle.x += dx / Math.max(distance, 1);
        particle.y += dy / Math.max(distance, 1);
      }
    }

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fill();
  }

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 126) {
        context.globalAlpha = 1 - distance / 126;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }
  }

  context.globalAlpha = 1;
  requestAnimationFrame(drawCanvas);
}

if (canvas && context) {
  resizeCanvas();
  drawCanvas();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
}
