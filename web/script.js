document.addEventListener("DOMContentLoaded", function () {
    // Select the image inside the sliding-image div
    const image = document.querySelector('.sliding-image img');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY; // Get the current scroll position

        // Add a delay before applying the transformation
        setTimeout(() => {
            // Adjust the transform property to slide the image off the screen
            image.style.transform = `translateY(0px) translateX(-${scrollY * 2}px)`;
        }, 100); // Delay in milliseconds
    });
});