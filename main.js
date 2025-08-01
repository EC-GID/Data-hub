document.addEventListener('DOMContentLoaded', function() {
  const homeSection = document.querySelector('.home');

  const lightImages = [
    "Wallpaper/arcgis-pro.png",
    "Wallpaper/how-to-use-spss.png",
    "Wallpaper/Immah.jpg",
    "Wallpaper/python3.png",
    "Wallpaper/R_class.jpg",
    "Wallpaper/R-Programming.jpg",
    "Wallpaper/sas-logo-midnight.png",
    "Wallpaper/Natural forest.jpeg",
    "Wallpaper/python.png"
  ];

  const darkImages = [
    "Wallpaper/arcgis-pro.png",
    "Wallpaper/how-to-use-spss.png",
    "Wallpaper/Immah.jpg",
    "Wallpaper/python3.png",
    "Wallpaper/R_class.jpg",
    "Wallpaper/R-Programming.jpg",
    "Wallpaper/sas-logo-midnight.png",
    "Wallpaper/Natural forest.jpeg",
    "Wallpaper/python.png"
  ];

  let currentIndex = 0;
  let currentImages = lightImages;

  function changeBackground() {
    homeSection.style.backgroundImage = `url('${currentImages[currentIndex]}')`;
    homeSection.style.backgroundSize = 'cover';
    homeSection.style.backgroundPosition = 'center';
    homeSection.style.backgroundRepeat = 'no-repeat';
    currentIndex = (currentIndex + 1) % currentImages.length;
  }

  changeBackground();
  const bgInterval = setInterval(changeBackground, 4000);

  const modalLinks = document.querySelectorAll('.modal-link');
  const closeButtons = document.querySelectorAll('.close');
  const modals = document.querySelectorAll('.modal');

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  modalLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const modalId = this.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', function(event) {
      if (event.target === this) {
        closeModal(this.id);
      }
    });
  });

  const darkToggle = document.getElementById('dark-mode-toggle');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkToggle.textContent = 'Light Mode';
    currentImages = darkImages;
  } else {
    currentImages = lightImages;
    darkToggle.textContent = 'Dark Mode';
  }

  darkToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    darkToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';

    currentImages = isDark ? darkImages : lightImages;
    currentIndex = 0; 
    changeBackground();

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
