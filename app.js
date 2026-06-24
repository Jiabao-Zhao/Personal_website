const projects = {
  assembly: {
    kicker: "Robotics & Automation Systems",
    title: "UR5e Collaborative Assembly System",
    description:
      "Designed a UR5e robotic assembly system integrating RTDE robot control, LLM-based reasoning, and VLM-based perception.",
    details: [
      "Connected robot control with language and vision reasoning for collaborative assembly.",
      "Built toward workflows where robots can interpret task context and adapt to changing assembly conditions.",
      "Core stack: UR5e, RTDE, LLM reasoning, VLM perception, and robotic task execution."
    ]
  },
  agent: {
    kicker: "AI-enabled Robotic Agents",
    title: "Instruction-to-Action Robot Agent",
    description:
      "Designed an LLM-enabled robotic agent that interprets human instructions and converts them into robot actions.",
    details: [
      "Fine-tuned machine-learning models to improve context understanding and task reasoning.",
      "Developed multi-agent planning logic for adaptive task allocation, coordination, and execution.",
      "Focused on translating high-level human language into useful robot behavior."
    ]
  },
  vision: {
    kicker: "Computer Vision",
    title: "Adaptive Vision for Novel Objects",
    description:
      "Developed an adaptive vision system combining 3D point-cloud processing with VLM reasoning for novel-object identification.",
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
      "Developed an RRT-based Model Predictive Control framework for path planning and trajectory optimization.",
    details: [
      "Used sampling-based planning concepts to produce feasible robotic paths.",
      "Applied model predictive control ideas to optimize trajectories under constraints.",
      "Built toward motion that is efficient, responsive, and practical for robot systems."
    ]
  },
  penndot: {
    kicker: "Internship",
    title: "PennDOT Automated Driving System",
    description:
      "Developed and tested software systems using ROS to support message passing between network sensors.",
    details: [
      "Created MATLAB simulations to model and control autonomous vehicle systems.",
      "Designed, built, and validated integrated camera, LiDAR, and radar systems.",
      "Worked across software, sensors, and autonomous system validation."
    ]
  },
  flowserve: {
    kicker: "Industry Project",
    title: "Flowserve Hydraulic Submergence Project",
    description:
      "Designed and developed a hydraulic test rig to investigate vortex formation in an upside-down pump configuration.",
    details: [
      "Conducted CFD and FEA simulations to optimize design parameters.",
      "Used DFMEA to evaluate reliability and reduce system risk.",
      "Connected mechanical design, simulation, and test validation."
    ]
  },
  startup: {
    kicker: "Entrepreneurship",
    title: "Just-EnCase",
    description:
      "Founded a startup concept introducing a container with suction-cup technology for personal storage solutions.",
    details: [
      "Developed product positioning, branding, and business planning.",
      "Worked through financial forecasting, accounting principles, and pitch development.",
      "Connected mechanical product thinking with customer-focused entrepreneurship."
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
  { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
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
