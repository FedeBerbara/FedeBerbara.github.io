document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.inner-card').classList.toggle('is-flipped');
    });
});