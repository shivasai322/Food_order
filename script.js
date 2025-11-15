document.addEventListener("DOMContentLoaded", function () {

   

    const filterButtons = document.querySelectorAll(".menu-btn button");
    const menuCards = document.querySelectorAll(".menu-card");

    let activeBtn = document.querySelector(".menu-btn button.active-filter");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            if (activeBtn) {
                activeBtn.classList.remove("active-filter");
            }

            btn.classList.add("active-filter");
            activeBtn = btn;

            const filter = btn.getAttribute("data-filter");

            menuCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    

    const track = document.querySelector(".testimonial-track");
    const slides = Array.from(document.querySelectorAll(".testimonial-slide"));
    const nextButton = document.querySelector(".t-next");
    const prevButton = document.querySelector(".t-prev");

    let index = 0;

    function updateSlide() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlide();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlide();
    });

});

