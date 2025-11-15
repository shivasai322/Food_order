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

});
