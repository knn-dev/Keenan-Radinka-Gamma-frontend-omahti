// ==================== PORTFOLIO SHOW MORE / SHOW LESS ====================
function togglePortfolio() {
  const grid = document.getElementById('portofolio-grid');
  const btn = document.getElementById('btn-showmore');
  const text = document.getElementById('showmore-text');
  const arrow = document.getElementById('showmore-arrow');

  grid.classList.toggle('expanded');

  if (grid.classList.contains('expanded')) {
    text.textContent = 'Show Less';
    arrow.textContent = '↑';
    btn.classList.add('expanded');
  } else {
    text.textContent = 'Show More';
    arrow.textContent = '↓';
    btn.classList.remove('expanded');
  }
}

// ==================== TESTIMONIAL CAROUSEL ====================
let testimonialIndex = 0;

function slideTestimonial(direction) {
  const track = document.getElementById('testimonial-track');
  const cards = track.querySelectorAll('.testi-card');
  const totalCards = cards.length;

  // Calculate how many cards are visible based on container width
  const slider = document.getElementById('testimonial-slider');
  const sliderWidth = slider.offsetWidth;
  const cardWidth = cards[0].offsetWidth + 20; // card width + gap
  const visibleCards = Math.floor(sliderWidth / cardWidth);

  const maxIndex = Math.max(0, totalCards - visibleCards);

  testimonialIndex += direction;

  if (testimonialIndex < 0) {
    testimonialIndex = 0;
  }
  if (testimonialIndex > maxIndex) {
    testimonialIndex = maxIndex;
  }

  const translateX = -(testimonialIndex * cardWidth);
  track.style.transform = `translateX(${translateX}px)`;
}

// ==================== FAQ ACCORDION ====================
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const arrow = button.querySelector('.faq-arrow');
  const isActive = item.classList.contains('active');

  // Close all other items
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(function (faqItem) {
    if (faqItem !== item) {
      faqItem.classList.remove('active');
      faqItem.querySelector('.faq-answer').style.display = 'none';
      faqItem.querySelector('.faq-arrow').textContent = '›';
    }
  });

  // Toggle current item
  if (isActive) {
    item.classList.remove('active');
    answer.style.display = 'none';
    arrow.textContent = '›';
  } else {
    item.classList.add('active');
    answer.style.display = 'block';
    arrow.textContent = '⌄';
  }
}

// ==================== SMOOTH SCROLL FOR NAV LINKS ====================
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
