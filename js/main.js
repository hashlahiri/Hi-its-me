document.addEventListener('DOMContentLoaded', () => {
  // mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // contact form handling (Formspree)
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  const CONTACT_ENDPOINT = contactForm ? contactForm.action : '';

  if (contactForm && contactStatus && CONTACT_ENDPOINT) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = (contactForm.name?.value || '').trim();
      const email = (contactForm.email?.value || '').trim();
      const message = (contactForm.message?.value || '').trim();

      // validation
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        contactStatus.textContent = 'Please enter a valid email address.';
        contactForm.email?.focus();
        return;
      }
      if (!message || message.length < 10) {
        contactStatus.textContent = 'Message should be at least 10 characters.';
        contactForm.message?.focus();
        return;
      }

      contactStatus.textContent = 'Sending...';

      const formData = new FormData(contactForm);
      formData.set('name', name);
      formData.set('email', email);
      formData.set('message', message);

      try {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });

        if (response.ok) {
          contactStatus.textContent = 'Message sent! I will get back to you shortly.';
          contactForm.reset();
        } else {
          contactStatus.textContent = 'Something went wrong. Please try again or email me directly.';
        }
      } catch (err) {
        contactStatus.textContent = 'Network error. Please try again in a moment.';
      }
    });
  }
});
