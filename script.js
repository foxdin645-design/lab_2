// Збереження інфо у localStorage + вивід у футер
const systemInfo = `Система: ${navigator.platform}, Браузер: ${navigator.userAgent}`;
localStorage.setItem('user_info', systemInfo);

const footer = document.getElementById('main-footer');
const infoParagraph = document.createElement('p');
infoParagraph.style.fontSize = "12px";
infoParagraph.style.textAlign = "center";
infoParagraph.style.opacity = "0.7";
infoParagraph.innerText = "Дані системи: " + localStorage.getItem('user_info');
footer.appendChild(infoParagraph);

// Коментарі з API
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('experience-list');
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.email} (Відгук):</strong> ${item.body}`;
            list.appendChild(li);
        });
    });

// Модальне вікно через 60 секунд
const modal = document.getElementById("feedbackModal");
const closeBtn = document.querySelector(".close-button");

setTimeout(() => {
    modal.style.display = "block";
}, 60000);

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Автоматична зміна теми за часом (21:00 - 07:00)
const hour = new Date().getHours();
if (hour >= 21 || hour < 7) {
    document.body.classList.add('night-mode');
}

// Ручне перемикання теми 
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
});
