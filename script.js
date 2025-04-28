// Scroll untuk header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animasi muncul teks di hero
window.addEventListener('scroll', function() {
  const heroText = document.querySelector('.hero-text');
  const h1 = document.querySelector('.hero-text h'); // Teks pertama
  const h2 = document.querySelectorAll('.hero-text h2'); // Semua h2

  if (!heroText) return; // Cegah error kalau heroText tidak ada

  // Jika posisi scroll lebih dari hero
  const heroPosition = heroText.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (heroPosition < windowHeight - 100) {
      h1.style.opacity = 1;
      h1.style.transform = "translateY(0)";
      h2.forEach((el, index) => {
          setTimeout(() => {
              el.style.opacity = 1;
              el.style.transform = "translateY(0)";
          }, index * 300); // Delay untuk masing-masing h2
      });
  }
});

// Fungsi untuk toggle menu hamburger
const burgerMenu = document.getElementById('burger-menu');
const navList = document.getElementById('nav-list');

if (burgerMenu && navList) {
  burgerMenu.addEventListener('click', () => {
      navList.classList.toggle('active');
  });
}

// Animasi fade-in foto profil saat discroll
window.addEventListener('scroll', function() {
  const profilePic = document.querySelector('.profile-pic img');
  if (!profilePic) return;

  const profilePosition = profilePic.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (profilePosition < windowHeight - 100) {
      profilePic.classList.add('animate');
  }
});

// Animasi fade-in teks biodata h3 dan p saat discroll
window.addEventListener('scroll', function() {
  const bioTextH3 = document.querySelector('.bio-text h3');
  const bioTextP = document.querySelector('.bio-text p');

  if (!bioTextH3 || !bioTextP) return;

  const bioPosition = bioTextH3.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (bioPosition < windowHeight - 100) {
    bioTextH3.classList.add('animate');
    bioTextP.classList.add('animate');
  }
});

// Animasi fade-in untuk box saat discroll
window.addEventListener('scroll', function() {
  const boxes = document.querySelectorAll('.box');
  if (!boxes) return;

  boxes.forEach((box) => {
    const boxPosition = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxPosition < windowHeight - 100) {
      box.classList.add('animate');
    }
  });
});
