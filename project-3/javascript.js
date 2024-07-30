document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
