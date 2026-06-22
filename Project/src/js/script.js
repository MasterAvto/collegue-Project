'use ctrict'

const menu = document.querySelector('.main')
const sect = document.querySelector('.about-section')
const card = document.querySelector('.card')
const back = document.querySelector('.back')
const about = document.querySelector('.about')

card.addEventListener('click', () => {
    menu.classList.add('hide')
    sect.classList.remove('hide')
})

about.addEventListener('click', () => {
    menu.classList.add('hide')
    sect.classList.remove('hide')
})

back.addEventListener('click', () => {
    menu.classList.remove('hide')
    sect.classList.add('hide')
})

// Получаем кнопку
const scrollToTopBtn = document.querySelector(".up");

// Показываем кнопку при прокрутке вниз
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Добавляем обработчик события для кнопки
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
};

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const regModal = document.getElementById('modal-reg');
const authModal = document.getElementById('modal-auth');

document.getElementById('btn-reg').addEventListener('click', () => {
    regModal.style.display = 'block';
})
document.getElementById('btn-auth').addEventListener('click', () => {
    authModal.style.display = 'block';
})

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        regModal.style.display = 'none';
        authModal.style.display = 'none';
    });
});

window.onclick = (event) => {
    if (event.target == regModal || event.target == authModal) {
        regModal.style.display = 'none';
        authModal.style.display = 'none';
    }
};

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirmPassword').value;

    if (password !== confirm) {
        alert("Пароли не совпадают!");
        return;
    }

    alert(`Регистрация успешна для ${email}!`);
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    alert(`Вход выполнен для ${email}!`);
});