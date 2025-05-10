$(document).ready(function () {
    // Initialize Flickity
    var flkty = $('.carousel').flickity({
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        lazyLoad: 0,
        pageDots: false,
        autoPlay: 3000 // Auto-scroll every 3 seconds
    });

    // Add manual button controls
    $('.prev').on('click', function () {
        flkty.flickity('previous'); // Go to the previous slide
    });

    $('.next').on('click', function () {
        flkty.flickity('next'); // Go to the next slide
    });
});

//skills progress bar
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const progressValue = bar.getAttribute("data-progress");
        bar.style.width = progressValue + "%";
    });
});
