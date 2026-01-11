// Skeleton Screen UI shown for 3 seconds

setTimeout(() => { 
    document.querySelectorAll('.skeleton').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.hidden').forEach(el => el.style.display = 'block');
}, 3000);


// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
    const navBar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    //add or remove 'scrolled' class based on scroll position
    if (scrollPosition > 20) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled')
    }

    // calculate new font size based on scroll position
    let newSize = 3 - (scrollPosition * 0.03); // Decrease by 0.03 rem for every one pixel scroolled

    // Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

// Event Listener for scroll event
window.addEventListener('scroll', checkScroll);