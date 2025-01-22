const hamburguesa = document.querySelector('.hamburguesa');
const navList = document.querySelector('.nav-list2');
hamburguesa.addEventListener('click', () => {
    navList.classList.toggle('active');
});