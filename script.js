// script.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentPage = 0;
    const itemsPerPage = 3;

    // Show the first page by default
    for (let i = 0; i < itemsPerPage; i++) {
        galleryItems[i].classList.add('active');
    }

    // Next button functionality
    nextBtn.addEventListener('click', function() {
        // Hide current page
        for (let i = currentPage * itemsPerPage; i < (currentPage + 1) * itemsPerPage; i++) {
            galleryItems[i].classList.remove('active');
        }
        // Show next page
        currentPage++;
        for (let i = currentPage * itemsPerPage; i < (currentPage + 1) * itemsPerPage; i++) {
            if (i < galleryItems.length) {
                galleryItems[i].classList.add('active');
            }
        }
        // Check if we need to disable next button
        if ((currentPage + 1) * itemsPerPage >= galleryItems.length) {
            nextBtn.disabled = true;
        }
        prevBtn.disabled = false;
    });

    // Previous button functionality
    prevBtn.addEventListener('click', function() {
        // Hide current page
        for (let i = currentPage * itemsPerPage; i < (currentPage + 1) * itemsPerPage; i++) {
            galleryItems[i].classList.remove('active');
        }
        // Show previous page
        currentPage--;
        for (let i = currentPage * itemsPerPage; i < (currentPage + 1) * itemsPerPage; i++) {
            galleryItems[i].classList.add('active');
        }
        // Check if we need to disable previous button
        if (currentPage == 0) {
            prevBtn.disabled = true;
        }
        nextBtn.disabled = false;
    });
});