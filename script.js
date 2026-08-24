/* ------------------------------------------------------------------
   Portfolio content — edit these values to customize the site.
   ------------------------------------------------------------------ */

const EMAIL = "hello@example.com";
const GITHUB = "https://github.com/";
const LINKEDIN = "https://linkedin.com/in/";
const RESUME = "./David_Coelho_CV.pdf"; // Path/URL to your resume PDF

const PROJECTS = [
  {
    title: "Atlas Analytics",
    description: "Real-time analytics platform ingesting millions of events per day.",
    stack: ["TypeScript", "Node.js", "ClickHouse", "Redis"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Orbit Design System",
    description: "Accessible component library shared across six product teams.",
    stack: ["JavaScript", "CSS", "Storybook", "a11y"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Ledger API",
    description: "Double-entry payments service with idempotent transfers and 99.99% uptime.",
    stack: ["Go", "PostgreSQL", "gRPC", "Kubernetes"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Pulse CLI",
    description: "Developer tool that profiles CI pipelines and surfaces the slowest jobs.",
    stack: ["Rust", "GitHub Actions", "SQLite"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

const SKILLS = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Tailwind", "Accessibility"] },
  { group: "Backend", items: ["Node.js", "Nest", "Python", "Django", "PostgreSQL", "Redis", "REST", "numpy", "pandas"] },
  { group: "Tools", items: ["Git", "VSCode", "GitLab", "GitHub", "Docker"] },
];

const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    points: [
      "Led the migration of a monolith to event-driven services, cutting p95 latency by 40%.",
      "Mentored four engineers and introduced a lightweight design review process.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Cobalt Systems",
    period: "2020 — 2023",
    points: [
      "Shipped the customer-facing dashboard used daily by 30k+ users.",
      "Built the CI pipeline that reduced release time from hours to minutes.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Bright Fox",
    period: "2018 — 2020",
    points: [
      "Delivered features across the stack for an e-commerce platform.",
      "Improved Lighthouse performance scores from 54 to 95.",
    ],
  },
];

/* ------------------------------------------------------------------
   Rendering
   ------------------------------------------------------------------ */

const escape = (value) =>
  String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

document.getElementById("projects-grid").innerHTML = PROJECTS.map(
  (project) => `
    <article class="card">
      <h3>${escape(project.title)}</h3>
      <p>${escape(project.description)}</p>
      <ul class="tags">${project.stack.map((tech) => `<li>${escape(tech)}</li>`).join("")}</ul>
      <div class="card-links">
        <a href="${escape(project.github)}" target="_blank" rel="noreferrer noopener">GitHub</a>
        <a href="${escape(project.demo)}" target="_blank" rel="noreferrer noopener">Live demo</a>
      </div>
    </article>`,
).join("");

document.getElementById("skills-grid").innerHTML = SKILLS.map(
  (group) => `
    <div class="card">
      <h3 class="group-title">${escape(group.group)}</h3>
      <ul class="tags">${group.items.map((item) => `<li>${escape(item)}</li>`).join("")}</ul>
    </div>`,
).join("");

document.getElementById("experience-list").innerHTML = EXPERIENCE.map(
  (role) => `
    <li>
      <h3>${escape(role.role)} · ${escape(role.company)}</h3>
      <span class="period">${escape(role.period)}</span>
      <ul>${role.points.map((point) => `<li>${escape(point)}</li>`).join("")}</ul>
    </li>`,
).join("");

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("email-link").href = `mailto:${EMAIL}`;
document.getElementById("github-link").href = GITHUB;
document.getElementById("linkedin-link").href = LINKEDIN;

const resumeLink = document.getElementById("resume-link");
const resumeLinkMobile = document.getElementById("resume-link-mobile");
if (RESUME) {
  resumeLink.href = RESUME;
  resumeLinkMobile.href = RESUME;
} else {
  resumeLink.style.display = "none";
  resumeLinkMobile.parentElement.style.display = "none";
}

/* Contact form -> opens the visitor's mail client */
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
  const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("email")}`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});

/* Navbar scroll state */
const navbar = document.getElementById("navbar");
function updateNavbar() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}
window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

/* Mobile menu toggle */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.hidden;
  mobileMenu.hidden = isOpen;
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  });
});
