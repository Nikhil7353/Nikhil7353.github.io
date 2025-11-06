// --- About Section Scroll Animation ---
window.addEventListener("scroll", () => {
  const about = document.querySelector("#about");
  if (about && about.getBoundingClientRect().top < window.innerHeight - 100) {
    about.classList.add("show");
  }
});

// --- Contact Form (Formspree) Submission Handling ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Oops! Something went wrong. Please try again.");
      }
    });
  }
});
