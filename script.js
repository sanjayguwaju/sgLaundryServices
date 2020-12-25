var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click',function(){
    mobileNav.style.display = 'block';
    // this.closeModal();
});

toggleButton.addEventListener('click',function(){
    mobileNav.style.display = 'none';
});

// backdrop.addEventListener("click", closeModal);

// function closeModal() {
//     backdrop.style.display = "none";

// };