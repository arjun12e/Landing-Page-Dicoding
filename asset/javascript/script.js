
document.querySelector('.hire').addEventListener('click', function() {
    alert('Terima kasih sudah ingin hire saya! Silakan kontak lewat form ya.');
});

document.querySelector('.talks').addEventListener('click', function() {
    alert('Ayo ngobrol! Kirim pesan lewat form di bawah ya.');
});

const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Cek mode sebelumnya di localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
