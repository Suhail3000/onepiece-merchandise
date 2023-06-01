document.addEventListener('DOMContentLoaded', function() {
  var reviewsTab = document.getElementById('reviews-tab');
  var topReviewsSection = document.getElementById('section4');

  reviewsTab.addEventListener('click', function() {
    topReviewsSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var trendingTab = document.getElementById('trending-tab');
  var trendingSection = document.getElementById('section3');

  trendingTab.addEventListener('click', function() {
    trendingSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var contactTab = document.getElementById('contact-tab');
  var contactSection = document.getElementById('section5');

  contactTab.addEventListener('click', function() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var servicesTab = document.getElementById('services-tab');
  var servicesSection = document.getElementById('section2');

  servicesTab.addEventListener('click', function() {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  });
});