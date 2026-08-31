/* ------------------------------------------------------------------
   Portfolio content — edit these values to customize the site.
   ------------------------------------------------------------------ */
 
const EMAIL = "coelho109.bcl@gmail.com";
const GITHUB = "https://github.com/DavCoelho";
const LINKEDIN = "https://www.linkedin.com/in/david-coelho-48b9a5182/";
const RESUME = "./David_Coelho_CV_current.pdf"; // Path/URL to your resume PDF
 
const PROJECTS = [
  {
    title: "Djangobnb",
    description: "A full-stack Airbnb clone with Next.js and Django — property listings, date-range reservation booking, live chat between users, and property favoriting.",
    stack: ["Next.js", "React", "TypeScript", "Django", "DjangoREST", "Tailwind"],
    github: "https://gitlab.com/coelho109.bcl/next.js-and-django-fullstack-airbnb-clone",
    demo: "https://next-js-and-django-fullstack-airbnb.vercel.app",
  },
];
 
const SKILLS = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "Nest", "Python", "Django", "PostgreSQL", "Redis", "REST", "Numpy", "Pandas"] },
  { group: "Tools", items: ["Git", "VSCode", "GitLab", "GitHub", "Docker"] },
];
 
const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Wish and Cook",
    period: "02/2026 — Present",
    points: [
      "Contributing full-stack (NestJS/Next.js) to a production robotic cooking automation platform, including a frontend design-system migration and end-to-end debugging of a real-time notification pipeline.",
      "Designed UI/UX for a tablet-based field maintenance application, including a dark-mode design system and high-fidelity dashboard mockups.",
    ],
  },
  {
    role: "Unity Game Developer",
    company: "Kendir Studios",
    period: "11/2024 — 01/2026",
    points: [
      "Developed educational 2D and 3D games in C# using Unity, in partnership with Portugal's General Board of Education (DGE).",
      "Collaborated within a cross-functional team of developers, designers, and project managers to deliver projects on schedule.",
    ],
  },
  {
    role: "Fullstack Developer & Data Analyst",
    company: "Wish and Cook",
    period: "03/2021 — 08/2024",
    points: [
      "Designed and maintained responsive web interfaces in React, implementing dynamic UI components, application state management, and API integration.",
      "Built backend systems and RESTful APIs using Django and Django REST Framework, including server-side logic and database integration.",
      "Developed data analysis pipelines and mathematical algorithms in Python (Pandas, NumPy).",
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
        <a href="${escape(project.github)}" target="_blank" rel="noreferrer noopener">Code</a>
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
