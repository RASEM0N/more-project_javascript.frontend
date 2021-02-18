const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', (event) => {
        removeActiveClasse();
        panel.classList.add('active');
    });
});

const removeActiveClasse = () => {
    panels.forEach((panel) => {
        if (panel.classList.contains('active')) panel.classList.remove('active');
    });
};
