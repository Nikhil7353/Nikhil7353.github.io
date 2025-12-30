// --- About Section Scroll Animation ---
(() => {
  const about = document.querySelector("#about");
  if (!about) return;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // If the user prefers reduced motion, skip animation entirely.
  if (prefersReducedMotion) {
    about.classList.add("show");
    return;
  }

  let ticking = false;

  const maybeReveal = () => {
    ticking = false;
    if (about.classList.contains("show")) return;

    const top = about.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      about.classList.add("show");
      window.removeEventListener("scroll", onScroll);
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(maybeReveal);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  // Run once on load in case the section is already in view.
  maybeReveal();
})();

// --- Contact Form (Formspree) Submission Handling ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#contactForm');
  const formMessage = document.querySelector('#formMessage');
  const submitBtn = document.querySelector('#submitBtn');
  const submitText = submitBtn?.querySelector('.submit-text');
  const spinner = submitBtn?.querySelector('.spinner-border');

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Show loading state
      if (submitBtn && submitText && spinner) {
        submitBtn.disabled = true;
        submitText.classList.add('d-none');
        spinner.classList.remove('d-none');
      }

      // Hide previous messages
      if (formMessage) {
        formMessage.classList.add('d-none');
        formMessage.classList.remove('alert-success', 'alert-danger');
      }

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          if (formMessage) {
            formMessage.textContent = "✅ Message sent successfully! I'll get back to you soon.";
            formMessage.classList.add('alert-success');
            formMessage.classList.remove('d-none');
          }
          form.reset();
          // Scroll to message
          formMessage?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          const data = await response.json().catch(() => ({}));
          if (formMessage) {
            formMessage.textContent = data.error || "❌ Oops! Something went wrong. Please try again.";
            formMessage.classList.add('alert-danger');
            formMessage.classList.remove('d-none');
          }
        }
      } catch (error) {
        if (formMessage) {
          formMessage.textContent = "❌ Network error. Please check your connection and try again.";
          formMessage.classList.add('alert-danger');
          formMessage.classList.remove('d-none');
        }
      } finally {
        // Reset button state
        if (submitBtn && submitText && spinner) {
          submitBtn.disabled = false;
          submitText.classList.remove('d-none');
          spinner.classList.add('d-none');
        }
      }
    });
  }
});
