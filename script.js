const menuBtn=document.getElementById('menuBtn');
const navbar=document.getElementById('navbar');
menuBtn.addEventListener('click',()=>navbar.classList.toggle('open'));
document.querySelectorAll('.navbar a').forEach(link=>link.addEventListener('click',()=>navbar.classList.remove('open')));
window.addEventListener('scroll',()=>document.querySelector('.header').classList.toggle('scrolled',window.scrollY>30));
document.getElementById('year').textContent=new Date().getFullYear();
