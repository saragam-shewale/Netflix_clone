// ===============================
// GET HTML ELEMENTS
// ===============================

const movieSlider = document.getElementById("movieSlider");

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");


// ===============================
// SLIDE AMOUNT
// ===============================

const slideAmount = 600;


// ===============================
// RIGHT BUTTON
// ===============================

rightBtn.addEventListener("click", function () {

    movieSlider.scrollBy({

        left: slideAmount,

        behavior: "smooth"

    });

});


// ===============================
// LEFT BUTTON
// ===============================

leftBtn.addEventListener("click", function () {

    movieSlider.scrollBy({

        left: -slideAmount,

        behavior: "smooth"

    });

});


// ===============================
// CHECK BUTTONS
// ===============================

function checkButtons() {

    // Check left side

    if (movieSlider.scrollLeft <= 0) {

        leftBtn.disabled = true;

    } else {

        leftBtn.disabled = false;

    }


    // Check right side

    const maxScroll =
        movieSlider.scrollWidth -
        movieSlider.clientWidth;


    if (movieSlider.scrollLeft >= maxScroll - 5) {

        rightBtn.disabled = true;

    } else {

        rightBtn.disabled = false;

    }
}


// ===============================
// WHEN SLIDER MOVES
// ===============================

movieSlider.addEventListener("scroll", checkButtons);


// ===============================
// WHEN PAGE LOADS
// ===============================

window.addEventListener("load", checkButtons);