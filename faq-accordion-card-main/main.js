const items = document.querySelector('.faq-content-item');


items.forEach(item => {
    item.addEventListener('click', () =>
    {
        document.body.classList.toggle('arrow-open');
    })
})
