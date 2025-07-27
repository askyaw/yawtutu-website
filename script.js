/*
 * Minimal JavaScript for interactive behaviours.
 *
 * The main functionality here is toggling the mobile navigation
 * menu. Additional scripts could be added later for form validation
 * or dynamic features, but we keep the footprint very small.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');

  // Toggle mobile nav visibility
  navToggle?.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
});