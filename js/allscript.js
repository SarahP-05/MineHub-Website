// Show Scroll to Top Button on Scroll
window.addEventListener("scroll", function () {
    let scrollButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});

// Smooth Scroll to Top Function


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

//carousel movement
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const cardWidth = document.querySelector(".video-card").offsetWidth + 3; // Width + gap

    let currentIndex = 0;

    nextButton.addEventListener("click", () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        currentIndex = Math.min(currentIndex + cardWidth, maxScroll);
        track.style.transform = `translateX(-${currentIndex}px)`;
    });

    prevButton.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - cardWidth, 0);
        track.style.transform = `translateX(-${currentIndex}px)`;
    });
});





/* Index Picture Animation */
document.addEventListener("DOMContentLoaded", function () {
    const founderImage = document.getElementById("founderImage");

    founderImage.addEventListener("mouseover", function () {
        this.src = "img/notchskin.png";
    });

    founderImage.addEventListener("mouseout", function () {
        this.src = "img/notch.jpg";
    });
});



// Wait for the page to load
window.onload = function() {
    // Set a timeout of 2 seconds (2000ms)
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById("loadingScreen").style.display = "none";
        // Show the main content
        document.getElementById("content").style.display = "block";
    }, 2000); // 2 seconds
};
