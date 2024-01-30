const darkMode = document.getElementById('modoOscuro');

const luzOn = document.querySelector('.bombillo-on');
const luzOff = document.querySelector('.bombillo-off');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');


    const darkModeActive = document.body.classList.contains('dark-mode');

    if (darkModeActive) {
        luzOff.style.display = 'block';
        luzOn.style.display = 'none';
    } else {
        luzOff.style.display = 'none';
        luzOn.style.display = 'block';
    }
})