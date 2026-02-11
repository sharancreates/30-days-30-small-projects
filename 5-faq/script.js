document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const icon = header.querySelector('.icon');
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            document.querySelectorAll('.accordion-header').forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.querySelector('.icon').textContent = '+';
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });
            if (isActive) {
                header.classList.remove('active');
                icon.textContent = '+';
                content.style.maxHeight = null;
            } 
            else {
                header.classList.add('active');
                icon.textContent = '-'; 
                
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});