document.getElementById('menu').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    document.getElementById('menu').textContent =
        nav.style.display === 'flex' ? '✖' : '☰';
});


document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;
  