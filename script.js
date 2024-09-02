document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuClose = document.querySelector('.menu-close');
    const mainContent = document.querySelector('main');
    const header = document.querySelector('header');

    // Function to adjust main content margin
    function adjustMainMargin() {
        const headerHeight = header.offsetHeight;
        mainContent.style.marginTop = ${headerHeight}px;
    }

    // Initial adjustment on load
    adjustMainMargin();

    // Adjust when window is resized
    window.addEventListener('resize', adjustMainMargin);

    menuToggle.addEventListener('click', function() {
        navMenu.classList.add('active');
        menuToggle.classList.add('close');
        menuClose.classList.add('active');
    });

    menuClose.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('close');
        menuClose.classList.remove('active');
    });

    // Fetch and display text content
    fetch('text-content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('text-content').innerHTML = data;
        });
});
