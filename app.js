const projects = {
  assembly: {
    kicker: "Robotics & Automation",
    title: "UR5e Collaborative Assembly System",
    status: "Finished",
    media: "assets/project-ur5e.svg",
    description:
      "A human-robot collaborative assembly system connecting UR5e control, language reasoning, and vision-aware task execution.",
    details: [
      "Integrated RTDE robot control with task-level reasoning for collaborative assembly workflows.",
      "Built toward adaptable robot behavior from human instructions, perceived context, and execution feedback.",
      "Core stack: UR5e, RTDE, ROS-adjacent tooling, LLM/VLM reasoning, Python, and control logic."
    ],
    links: [{ label: "Resume", href: "assets/Jiabao-Zhao-Resume.pdf" }]
  },
  agent: {
    kicker: "AI-enabled Robotic Agents",
    title: "AI-Enabled Robotic Agent",
    status: "In Progress",
    media: "assets/project-agent.svg",
    description:
      "An instruction-to-action robotic agent for turning human language into grounded robot actions and task plans.",
    details: [
      "Explores LLM agents, VLM reasoning, retrieval, and multi-agent planning for robotic workflows.",
      "Focuses on reliable decomposition from high-level requests into executable robot behavior.",
      "Keeps human instructions central while grounding decisions in robot and perception constraints."
    ],
    links: [{ label: "Contact", href: "mailto:zhaojiabao50@gmail.com" }]
  },
  vision: {
    kicker: "Computer Vision",
    title: "Adaptive Vision for Novel Manufacturing Objects",
    status: "In Progress",
    media: "assets/project-vision.svg",
    description:
      "A perception pipeline for object detection, localization, segmentation, and spatial understanding in manufacturing scenes.",
    details: [
      "Uses 3D point clouds, RealSense-style sensing, YOLO, SAM, and OpenCV methods.",
      "Targets novel or changing objects instead of fixed, brittle object sets.",
      "Designed to support downstream robot planning and assembly decisions."
    ],
    links: []
  },
  mpc: {
    kicker: "Planning & Control",
    title: "RRT-based Model Predictive Control",
    status: "Finished",
    media: "assets/project-mpc.svg",
    description:
      "A path planning and trajectory optimization project combining sampling-based planning ideas with MPC-style control.",
    details: [
      "Built RRT-based planning concepts for feasible motion generation.",
      "Applied model predictive control ideas to improve trajectory quality under constraints.",
      "Connected algorithmic planning with practical robotic motion needs."
    ],
    links: []
  },
  penndot: {
    kicker: "Autonomous Systems",
    title: "PennDOT Automated Driving Systems",
    status: "Finished",
    media: "assets/project-ads.svg",
    description:
      "Internship work around autonomous vehicle sensor systems, ROS message passing, simulation, and validation.",
    details: [
      "Developed and tested ROS-based software for networked sensor communication.",
      "Created MATLAB simulations to model and control autonomous vehicle behavior.",
      "Worked with integrated camera, LiDAR, and radar system validation."
    ],
    links: []
  },
  flowserve: {
    kicker: "Mechanical Systems",
    title: "Flowserve Hydraulic Submergence Project",
    status: "Finished",
    media: "assets/project-flowserve.svg",
    description:
      "A capstone hydraulic testing project focused on vortex formation in an upside-down pump configuration.",
    details: [
      "Designed and developed a hydraulic test rig for experimental validation.",
      "Used CFD, FEA, and DFMEA to refine design parameters and reduce risk.",
      "Connected mechanical design, simulation, and test procedures."
    ],
    links: []
  },
  tensegrity: {
    kicker: "Mechanical Design",
    title: "Hummingbird Tensegrity Shoulder",
    status: "Finished",
    media: "assets/project-tensegrity.svg",
    description:
      "A biologically inspired mechanical design project exploring tensegrity-style shoulder behavior.",
    details: [
      "Investigated lightweight structural behavior and compliant design ideas.",
      "Balanced mechanical geometry, movement, and practical fabrication constraints.",
      "Extended robotics thinking into bio-inspired mechanical systems."
    ],
    links: []
  },
  justencase: {
    kicker: "Entrepreneurship",
    title: "Just-EnCase",
    status: "Finished",
    media: "assets/project-justencase.svg",
    description:
      "A startup concept around a suction-cup container for practical personal storage.",
    details: [
      "Developed product positioning, customer framing, and pitch materials.",
      "Connected mechanical product thinking with business planning.",
      "Explored practical design details for storage, placement, and usability."
    ],
    links: []
  },
  manufacturing: {
    kicker: "AI Planning",
    title: "Multi-Agent Manufacturing Planning",
    status: "In Progress",
    media: "assets/project-manufacturing.svg",
    description:
      "A planning framework for coordinating agents and tasks in adaptive manufacturing workflows.",
    details: [
      "Uses LLM-style reasoning for task decomposition and agent coordination.",
      "Focuses on adaptive allocation when workflows, objects, or constraints change.",
      "Complements the broader robotic assembly research direction."
    ],
    links: []
  },
  presentations: {
    kicker: "Research Communication",
    title: "CASE/MSEC Research Presentations",
    status: "Finished",
    media: "assets/project-presentations.svg",
    description:
      "Research presentation work sharing robotics, manufacturing, and AI-enabled assembly progress.",
    details: [
      "Condensed technical systems into concise research stories and visuals.",
      "Prepared presentation material for engineering and research audiences.",
      "Supports publication and conference communication work."
    ],
    links: []
  }
};

const docs = {
  resume: {
    title: "Resume",
    file: "assets/Jiabao-Zhao-Resume.pdf",
    available: true
  },
  cv: {
    title: "Extended CV",
    available: false,
    message: "Extended CV preview is coming soon."
  },
  undergraduate: {
    title: "Undergraduate Transcript",
    available: false,
    message: "Undergraduate transcript preview is coming soon."
  },
  graduate: {
    title: "Graduate Transcript",
    available: false,
    message: "Graduate transcript preview is coming soon."
  }
};

const skillGroups = [
  {
    name: "Robotics & Control",
    skills: ["UR5e", "RTDE", "ROS", "MoveL / ServoL", "MPC", "RRT", "DMP", "Trajectory Control"]
  },
  {
    name: "AI & Reasoning",
    skills: ["LLM Agents", "VLM Reasoning", "RAG", "Fine-tuning", "Multi-agent Planning", "Task Decomposition", "Prompt Design", "Evaluation"]
  },
  {
    name: "Computer Vision",
    skills: ["RealSense D435", "3D Point Clouds", "YOLO", "SAM", "OpenCV", "Pose / Localization", "Segmentation", "Spatial Reasoning"]
  },
  {
    name: "Mechanical Engineering",
    skills: ["SolidWorks", "CFD", "FEA", "DFMEA", "Hydraulic Testing", "Manufacturing", "Mechanical Design", "Validation"]
  },
  {
    name: "Programming",
    skills: ["Python", "C++", "MATLAB", "Simulink", "Gurobi", "Data Analysis", "Control Scripts", "Automation"]
  }
];

const activityData = [
  { label: "Research Output", value: 18 },
  { label: "Robot Experiments", value: 42 },
  { label: "Code Contributions", value: 126 },
  { label: "Conference Work", value: 6 },
  { label: "Vision Tests", value: 34 },
  { label: "Control Runs", value: 55 }
];

const skillIcons = {
  UR5e: "UR",
  RTDE: "RT",
  ROS: "RO",
  "MoveL / ServoL": "MV",
  MPC: "MP",
  RRT: "RR",
  DMP: "DM",
  "Trajectory Control": "TC",
  "LLM Agents": "LA",
  "VLM Reasoning": "VR",
  RAG: "RG",
  "Fine-tuning": "FT",
  "Multi-agent Planning": "MA",
  "Task Decomposition": "TD",
  "Prompt Design": "PD",
  Evaluation: "EV",
  "RealSense D435": "RS",
  "3D Point Clouds": "3D",
  YOLO: "YO",
  SAM: "SA",
  OpenCV: "CV",
  "Pose / Localization": "PL",
  Segmentation: "SG",
  "Spatial Reasoning": "SR",
  SolidWorks: "SW",
  CFD: "CF",
  FEA: "FE",
  DFMEA: "DF",
  "Hydraulic Testing": "HT",
  Manufacturing: "MF",
  "Mechanical Design": "MD",
  Validation: "VA",
  Python: "PY",
  "C++": "C+",
  MATLAB: "ML",
  Simulink: "SL",
  Gurobi: "GB",
  "Data Analysis": "DA",
  "Control Scripts": "CS",
  Automation: "AU"
};

const root = document.documentElement;
const body = document.body;
const header = document.querySelector("[data-header]");
const year = document.getElementById("year");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.classList.add("dark");
}

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
});

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const navLinks = [...document.querySelectorAll(".nav-link")];
const indicator = document.querySelector(".nav-indicator");
const navTargets = navLinks
  .map((link) => ({
    link,
    id: link.getAttribute("href")?.slice(1),
    section: document.querySelector(link.getAttribute("href"))
  }))
  .filter((item) => item.id && item.section);
let navRaf = 0;

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

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function updateNavIndicatorFluid() {
  navRaf = 0;
  if (!indicator || !navTargets.length || getComputedStyle(indicator).display === "none") return;

  const sampleY = window.scrollY + window.innerHeight * 0.36;
  let current = navTargets[0];
  let next = navTargets[0];

  for (let i = 0; i < navTargets.length; i += 1) {
    const item = navTargets[i];
    const following = navTargets[i + 1] || item;
    if (sampleY >= item.section.offsetTop) {
      current = item;
      next = following;
    }
  }

  const start = current.section.offsetTop;
  const end = next.section.offsetTop === start ? start + current.section.offsetHeight : next.section.offsetTop;
  const progress = Math.min(1, Math.max(0, (sampleY - start) / Math.max(1, end - start)));
  const active = progress > 0.54 ? next : current;

  navLinks.forEach((link) => link.classList.toggle("is-active", link === active.link));
  indicator.style.width = `${lerp(current.link.offsetWidth, next.link.offsetWidth, progress)}px`;
  indicator.style.transform = `translateX(${lerp(current.link.offsetLeft, next.link.offsetLeft, progress) - 4}px)`;
  indicator.style.opacity = "1";
}

function scheduleNavUpdate() {
  if (navRaf) return;
  navRaf = requestAnimationFrame(updateNavIndicatorFluid);
}

window.addEventListener("load", scheduleNavUpdate);
window.addEventListener("resize", scheduleNavUpdate);
window.addEventListener("scroll", scheduleNavUpdate, { passive: true });

const observedSections = [...document.querySelectorAll("#home, #about, #resume, #major-projects, #additional-projects, #skills")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) scheduleNavUpdate();
  },
  { rootMargin: "-34% 0px -54% 0px", threshold: [0.12, 0.3, 0.6] }
);

observedSections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");

function setMenu(open) {
  mobileMenu?.classList.toggle("is-open", open);
  mobileMenu?.setAttribute("aria-hidden", String(!open));
  body.classList.toggle("menu-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
}

menuToggle?.addEventListener("click", () => setMenu(true));
document.querySelector("[data-menu-close]")?.addEventListener("click", () => setMenu(false));
mobileMenu?.querySelectorAll("a, [data-open-contact]").forEach((item) => {
  item.addEventListener("click", () => setMenu(false));
});

function initWaveCanvas() {
  const canvas = document.querySelector("[data-wave-canvas]");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const pointer = { x: -1000, y: -1000, active: false };
  let width = 0;
  let height = 0;
  let raf = 0;
  let start = performance.now();

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(now) {
    const t = (now - start) * 0.001;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1.25;
    ctx.lineCap = "round";

    const lines = 23;
    const spacing = height / (lines + 1);
    for (let i = 0; i < lines; i += 1) {
      const yBase = spacing * (i + 1);
      const entrance = Math.min(1, (now - start - i * 22) / 950);
      const alpha = 0.12 + i * 0.007;
      ctx.strokeStyle = `rgba(217, 192, 108, ${alpha * Math.max(0, entrance)})`;
      ctx.beginPath();

      for (let x = -40; x <= width + 40; x += 12) {
        const phase = x * 0.012 + t * 0.85 + i * 0.42;
        const wave = Math.sin(phase) * (12 + Math.sin(i) * 5);
        const wave2 = Math.sin(x * 0.025 - t * 0.65 + i) * 3;
        let bulge = 0;

        if (pointer.active) {
          const dx = x - pointer.x;
          const dy = yBase - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 220);
          bulge = Math.sin(influence * Math.PI) * 54 * (dy < 0 ? -1 : 1);
        }

        const y = yBase + wave + wave2 + bulge;
        if (x === -40) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
    }

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
  });
  canvas.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  resize();
  raf = requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else {
      start = performance.now();
      raf = requestAnimationFrame(draw);
    }
  });
}

initWaveCanvas();

let activeModal = null;
let selectedCard = null;

function openModal(modal) {
  if (!modal) return;
  activeModal = modal;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
}

function closeActiveModal() {
  if (!activeModal) return;
  const closingModal = activeModal;
  const projectPanel = closingModal.querySelector(".project-modal-panel");
  if (projectPanel) projectPanel.classList.add("is-preparing");
  activeModal.classList.remove("is-open");
  activeModal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
  if (projectPanel) {
    projectPanel.style.transform = "";
    setTimeout(() => projectPanel.classList.remove("is-preparing"), 220);
  }
  if (selectedCard) {
    const restoredCard = selectedCard;
    restoredCard.classList.remove("is-hidden");
    restoredCard.classList.add("card-restored");
    setTimeout(() => restoredCard.classList.remove("card-restored"), 430);
    selectedCard = null;
  }
  activeModal = null;
}

document.querySelectorAll("[data-close-modal]").forEach((item) => {
  item.addEventListener("click", closeActiveModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeActiveModal();
    setMenu(false);
  }
});

function openProject(projectId, card) {
  const project = projects[projectId];
  const modal = document.getElementById("project-modal");
  if (!project || !modal) return;

  const panel = modal.querySelector(".project-modal-panel");
  const mediaMarkup = project.media?.match(/\.(mp4|webm|mov)$/i)
    ? `<video src="${project.media}" autoplay muted loop playsinline controls></video>`
    : `<img src="${project.media}" alt="${project.title} media preview">`;
  modal.querySelector(".modal-media").innerHTML = mediaMarkup;
  modal.querySelector(".modal-kicker").textContent = project.kicker;
  modal.querySelector("#project-modal-title").textContent = project.title;
  modal.querySelector(".modal-description").textContent = project.description;
  modal.querySelector(".modal-list").innerHTML = project.details.map((detail) => `<li>${detail}</li>`).join("");
  modal.querySelector(".modal-actions").innerHTML = project.links
    .map((link) => `<a href="${link.href}">${link.label}</a>`)
    .join("");

  const rect = card.getBoundingClientRect();
  selectedCard = card;
  openModal(modal);

  if (panel) {
    panel.classList.add("is-preparing");
    const panelRect = panel.getBoundingClientRect();
    const dx = rect.left + rect.width / 2 - (panelRect.left + panelRect.width / 2);
    const dy = rect.top + rect.height / 2 - (panelRect.top + panelRect.height / 2);
    const sx = Math.max(0.2, rect.width / panelRect.width);
    const sy = Math.max(0.2, rect.height / panelRect.height);
    panel.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    panel.style.borderRadius = `${getComputedStyle(card).borderRadius || "12px"}`;
    requestAnimationFrame(() => {
      setTimeout(() => selectedCard?.classList.add("is-hidden"), 70);
      panel.style.transform = "translate(0, 0) scale(1)";
      panel.style.borderRadius = "14px";
      setTimeout(() => panel.classList.remove("is-preparing"), 260);
    });
  }
}

document.querySelectorAll("[data-project]").forEach((card) => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.addEventListener("click", () => openProject(card.dataset.project, card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card.dataset.project, card);
    }
  });
});

document.querySelectorAll(".lanyard-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    card.style.setProperty("--hover-x", `${x}px`);
    card.style.setProperty("--hover-y", `${y}px`);
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--hover-x", "0px");
    card.style.setProperty("--hover-y", "0px");
  });
});

function openDocument(docId) {
  const doc = docs[docId];
  const modal = document.getElementById("document-modal");
  if (!doc || !modal) return;

  modal.querySelector("#document-modal-title").textContent = doc.title;
  modal.querySelector(".document-preview").innerHTML = doc.available
    ? `<iframe src="${doc.file}" title="${doc.title} preview"></iframe>`
    : `<div class="coming-soon">
        <strong>Coming soon</strong>
        <span>${doc.message} This document button is intentionally kept active so the preview experience stays consistent once the file is added.</span>
        <div class="disabled-preview" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      </div>`;
  openModal(modal);
}

document.querySelectorAll("[data-doc]").forEach((button) => {
  button.addEventListener("click", () => openDocument(button.dataset.doc));
});

document.querySelector("[data-open-bio]")?.addEventListener("click", () => {
  openModal(document.getElementById("bio-modal"));
});

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => openModal(document.getElementById("contact-modal")));
});

const controls = document.querySelector(".skill-controls");
const badgeGrid = document.querySelector(".skill-badge-grid");
const cycleToggle = document.querySelector("[data-cycle-toggle]");
let activeSkill = 0;
let cycling = true;
let cycleTimer = null;

function renderSkills(index) {
  activeSkill = index;
  const group = skillGroups[index];
  if (!controls || !badgeGrid || !group) return;

  controls.querySelectorAll(".skill-tab").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
    button.setAttribute("aria-selected", String(buttonIndex === index));
  });

  badgeGrid.innerHTML = group.skills
    .map((skill, skillIndex) => {
      const icon = skillIcons[skill] || skill.slice(0, 2).toUpperCase();
      return `<span class="skill-badge" style="animation-delay:${skillIndex * 36}ms"><span class="skill-icon">${icon}</span>${skill}</span>`;
    })
    .join("");
}

function startSkillCycle() {
  clearInterval(cycleTimer);
  if (!cycling) return;
  cycleTimer = setInterval(() => {
    renderSkills((activeSkill + 1) % skillGroups.length);
  }, 3200);
}

if (controls && badgeGrid) {
  controls.innerHTML = skillGroups
    .map((group, index) => `<button class="skill-tab" type="button" role="tab" aria-selected="${index === 0}" data-skill-index="${index}">${group.name}</button>`)
    .join("");

  controls.querySelectorAll("[data-skill-index]").forEach((button) => {
    button.addEventListener("click", () => {
      cycling = false;
      cycleToggle.querySelector("span").textContent = "Cycle";
      renderSkills(Number(button.dataset.skillIndex));
      startSkillCycle();
    });
  });

  cycleToggle?.addEventListener("click", () => {
    cycling = !cycling;
    cycleToggle.querySelector("span").textContent = cycling ? "Pause" : "Cycle";
    startSkillCycle();
  });

  renderSkills(0);
  startSkillCycle();
}

function renderChart() {
  const chart = document.querySelector("[data-chart]");
  if (!chart) return;
  const max = Math.max(...activityData.map((item) => item.value));
  const width = 760;
  const height = 310;
  const padding = { top: 28, right: 34, bottom: 48, left: 42 };
  const usableWidth = width - padding.left - padding.right;
  const usableHeight = height - padding.top - padding.bottom;
  const points = activityData.map((item, index) => {
    const x = padding.left + (index / Math.max(1, activityData.length - 1)) * usableWidth;
    const y = padding.top + usableHeight - (item.value / max) * usableHeight;
    return { ...item, x, y };
  });
  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${height - padding.bottom} L ${points[0].x.toFixed(1)} ${height - padding.bottom} Z`;

  chart.innerHTML = `
    <svg class="area-chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="Activity area chart">
      <defs>
        <linearGradient id="activityAreaGradient" x1="0" x2="0" y1="0" y2="1">
          <stop stop-color="#D9C06C" stop-opacity=".48"/>
          <stop offset=".72" stop-color="#D9C06C" stop-opacity=".12"/>
          <stop offset="1" stop-color="#D9C06C" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path class="area-fill" d="${areaPath}"></path>
      <path class="area-line" d="${linePath}"></path>
      ${points
        .map(
          (point, index) => `
            <circle class="area-point" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="7" data-point="${index}" tabindex="0"></circle>
            <text class="area-label" x="${point.x.toFixed(1)}" y="${height - 17}">${point.label.split(" ")[0]}</text>
          `
        )
        .join("")}
    </svg>
    <div class="area-tooltip" data-chart-tooltip><strong></strong><span></span></div>
  `;

  const tooltip = chart.querySelector("[data-chart-tooltip]");
  chart.querySelectorAll(".area-point").forEach((point) => {
    const show = () => {
      const item = points[Number(point.dataset.point)];
      tooltip.querySelector("strong").textContent = item.label;
      tooltip.querySelector("span").textContent = `${item.value} logged items`;
      tooltip.style.left = `${(item.x / width) * 100}%`;
      tooltip.style.top = `${(item.y / height) * 100}%`;
      tooltip.classList.add("is-visible");
      point.classList.add("is-active");
    };
    const hide = () => {
      tooltip.classList.remove("is-visible");
      point.classList.remove("is-active");
    };
    point.addEventListener("mouseenter", show);
    point.addEventListener("focus", show);
    point.addEventListener("mouseleave", hide);
    point.addEventListener("blur", hide);
  });
}

renderChart();
