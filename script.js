// ==================== PORTFOLIO SHOW MORE / SHOW LESS ====================
function togglePortfolio() {
  const rowsWrapper = document.getElementById('portofolio-rows');
  const extraRow = rowsWrapper.querySelector('.extra-row');
  const text = document.getElementById('showmore-text');
  const arrow = document.getElementById('showmore-arrow');

  rowsWrapper.classList.toggle('expanded');

  if (rowsWrapper.classList.contains('expanded')) {
    text.textContent = 'Show Less';
    arrow.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="12" y1="19" x2="12" y2="5"/>' +
      '<polyline points="5 12 12 5 19 12"/>' +
      '</svg>';
  } else {
    text.textContent = 'Show More';
    arrow.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="12" y1="5" x2="12" y2="19"/>' +
      '<polyline points="19 12 12 19 5 12"/>' +
      '</svg>';
  }
}

// ==================== TESTIMONIAL CAROUSEL ====================
let testimonialIndex = 0;

function getCarouselMetrics() {
  const track = document.getElementById('testimonial-track');
  const cards = track.querySelectorAll('.testi-card');
  const slider = document.getElementById('testimonial-slider');
  const gap = 20;
  const cardWidth = cards[0].offsetWidth + gap;
  const visibleCards = Math.max(1, Math.round((slider.offsetWidth + gap) / cardWidth));
  const maxIndex = Math.max(0, cards.length - visibleCards);

  return { track, cardWidth, maxIndex };
}

function updateCarouselPosition() {
  const { track, cardWidth, maxIndex } = getCarouselMetrics();
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (testimonialIndex < 0) {
    testimonialIndex = 0;
  }
  if (testimonialIndex > maxIndex) {
    testimonialIndex = maxIndex;
  }

  const translateX = -(testimonialIndex * cardWidth);
  track.style.transform = 'translateX(' + translateX + 'px)';

  prevBtn.classList.toggle('is-hidden', testimonialIndex <= 0);
  nextBtn.classList.toggle('is-hidden', testimonialIndex >= maxIndex);
}

function slideTestimonial(direction) {
  testimonialIndex += direction;
  updateCarouselPosition();
}

// ==================== FAQ ACCORDION ====================
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const arrow = button.querySelector('.faq-arrow');
  const isActive = item.classList.contains('active');

  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(function (faqItem) {
    if (faqItem !== item) {
      faqItem.classList.remove('active');
      faqItem.querySelector('.faq-answer').style.display = 'none';
      faqItem.querySelector('.faq-arrow').textContent = '›';
    }
  });

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

// ==================== SMOOTH SCROLL & INIT ====================
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

  updateCarouselPosition();
  window.addEventListener('resize', updateCarouselPosition);
});
