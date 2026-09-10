const movieSlider = document.getElementById("movieSlider");

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");
// ===============================
// SLIDE AMOUNT
// ===============================
const slideAmount = 1400;
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


const questions = document.querySelectorAll(".que");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        const item = question.parentElement;

        item.classList.toggle("active");

    });

});
/* ========================= */
/* MOVIE POPUP */
/* ========================= */

const movieModal = document.getElementById("movieModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalYear = document.getElementById("modalYear");

const modalDescription = document.getElementById("modalDescription");


function openMovie(movie) {

    movieModal.style.display = "flex";


    if (movie === "alpha") {

        modalImage.src = "images/alpha.jpg";

        modalTitle.innerText = "Alpha";

        modalYear.innerText = "2026";

        modalDescription.innerText =
            "A thrilling story filled with action, adventure and drama. Watch this exciting movie only on our streaming platform.";

    }


    else if (movie === "cocktail") {

        modalImage.src = "images/cocktail.jpg";

        modalTitle.innerText = "Cocktail";

        modalYear.innerText = "2026";

        modalDescription.innerText =
            "A fun and entertaining movie filled with comedy, romance and memorable moments.";

    }


    else if (movie === "gandhari") {

        modalImage.src = "images/gandhari.jpg";

        modalTitle.innerText = "Gandhari";

        modalYear.innerText = "2026";

        modalDescription.innerText =
            "An exciting drama with powerful characters and an engaging story.";

    }


    else if (movie === "korean") {

        modalImage.src = "images/korean_kanakaran.jpg";

        modalTitle.innerText = "Korean Kanakaran";

        modalYear.innerText = "2026";

        modalDescription.innerText =
            "A unique movie combining comedy, drama and entertainment.";

    }


    else if (movie === "musafir") {

        modalImage.src = "images/musafir_cafe.jpg";

        modalTitle.innerText = "Musafir Cafe";

        modalYear.innerText = "2026";

        modalDescription.innerText =
            "A beautiful journey filled with friendship, emotions and adventure.";

    }


    else if (movie === "safed") {

        modalImage.src = "images/operation_safed_sagar.jpg";

        modalTitle.innerText = "Operation Safed Sagar";

        modalYear.innerText = "2026";

        modalDescription.innerText =
            "As the Kargil War erupts between India and Pakistan, the Golden Arrows squadron of the Air Force takes flight on a dangerous mission behind enemy lines.";

    }

}


/* CLOSE POPUP */

function closeMovie() {

    movieModal.style.display = "none";

}


/* CLOSE WHEN CLICKING OUTSIDE */

movieModal.addEventListener("click", function(event) {

    if (event.target === movieModal) {

        closeMovie();

    }

});
