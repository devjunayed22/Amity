document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".nav-btn");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".overlay");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function () {
        overlay.classList.add("active");
        setTimeout(() => {
            sidebar.classList.add("active");
        }, 200);
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
        setTimeout(() => {
            overlay.classList.remove("active");
        }, 200);
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        setTimeout(() => {
            overlay.classList.remove("active");
        }, 200);
    });
});

function toggleDropdown(id) {
    const item = document.getElementById(id);
    item.classList.toggle('active');
}

$(window).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    })
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down').forEach((el) => {
    observer.observe(el);
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".sidebar-dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownMenu = this.parentElement.nextElementSibling;
            const isOpen = dropdownMenu.classList.contains("active");

            document.querySelectorAll(".sidebar-dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("active");
                }
            });

            dropdownMenu.classList.toggle("active", !isOpen);
        });
    });
});


/* flatpickr */

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#checkin", {
        dateFormat: "d M Y",
        onClose: function (selectedDates) {
            let checkoutPicker = document.querySelector("#checkout")._flatpickr;
            checkoutPicker.set("minDate", selectedDates[0]);
        }
    });

    flatpickr("#checkout", {
        dateFormat: "d M Y",
    });
});

const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page');

        const pageTitles = {
            "hidden-gems-near-our-cottages-you-must-explore": "Hidden Gems Near Our Cottages You Must Explore - Amity - Nature Cottage",
            "how-to-make-the-most-of-a-rainy-day-at-the-cottage": "How To Make The Most Of A Rainy Day At The Cottage - Amity - Nature Cottage ",
            "planning-the-ultimate-cozy-cottage-getaway":"Planning The Ultimate Cozy Cottage Getaway - Amity - Nature Cottage",
            "a-weekend-in-serenity-your-cottage-experience":"A Weekend in Serenity: Your Cottage Experience - Amity - Nature Cottage",
            "the-magic-of-waking-up-in-nature-cottage-escapes":"The Magic of Waking Up in Nature: Cottage Escapes - Amity - Nature Cottage",
            "10-reason-a-cottage-stay-is-the-perfect-getway":"10 Reasons a Cottage Stay is the Perfect Gateway - Amity - Nature Cottage"
        };

        if (pageTitles[page]) {
            document.title = pageTitles[page];
        }

  document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let currentUrl = window.location.href;

    navLinks.forEach(link => {
      if (link.href === currentUrl) {
        link.classList.add("active");
      }
    });
  });

