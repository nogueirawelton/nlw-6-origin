import ScrollReveal from 'scrollreveal';

export default function initScrollReveal() {
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
  });

  scrollReveal.reveal(
    `#home .image, #home .text,
      #about .image, #about .text,
      #services header, #services .card,
      #testimonials header, #testimonials .testimonials
      #contact .text, #contact .links,
      footer .brand, footer .social
      `,
    { interval: 100 },
  );
}
