
    const themeToggle = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '🌞';
    }
    
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            themeToggle.textContent = '🌞';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });

      
      document.addEventListener("scroll", function() {
        const img = document.querySelector('.header-content img');
        const scrollPos = window.scrollY;
        if (img && !document.body.classList.contains('dark-mode')) {
            const scaleValue = Math.max(0.8, 1 - scrollPos * 0.0005);
            img.style.transform = `translateY(${-scrollPos * 0.1}px) rotate(${scrollPos * 0.05}deg) scale(${scaleValue})`;
        } else {
            img.style.transform = '';
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const popupOverlay = document.getElementById("popup-overlay");
        const popup = document.getElementById("popup");
        const emailForm = document.getElementById("emailForm");
        const emailInput = document.getElementById("emailInput");
        popupOverlay.style.display = "block"; 
    
        emailForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = emailInput.value;
            localStorage.setItem("userEmail", email);
            popupOverlay.style.display = "none";
        });
    });
    
   
    
