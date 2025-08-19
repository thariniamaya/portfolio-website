let menu =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('contactForm');
  let message = document.getElementById('thankYouMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    message.style.display = 'block';  
    form.reset();                      

    setTimeout(() => {
      message.style.display = 'none'; 
    }, 5000);
  });
});
