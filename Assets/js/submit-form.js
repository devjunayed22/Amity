document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        emailInput.classList.remove("is-invalid");

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
            emailInput.classList.add("is-invalid");
            isValid = false;
        }

        if (!isValid) {
            return; 
        }

        setTimeout(() => {
            const success = Math.random() > 0.3;

            if (success) {
                successMessage.classList.remove("d-none")
                errorMessage.classList.add("d-none");
                form.reset();
            } else {
                successMessage.style.add("d-none")
                errorMessage.style.remove("d-none");
            }

            setTimeout(() => {
                successMessage.style.add("d-none")
                errorMessage.style.add("d-none")
            }, 5000);
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("replyForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        
        nameInput.classList.remove("is-invalid");
        emailInput.classList.remove("is-invalid");
        commentInput.classList.remove("is-invalid");

        if (nameInput.value.trim() === "") {
            nameInput.classList.add("is-invalid");
            isValid = false;
        }
        if (commentInput.value.trim() === "") {
            commentInput.classList.add("is-invalid");
            isValid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
            emailInput.classList.add("is-invalid");
            isValid = false;
        }

        if (!isValid) {
            return; 
        }

        setTimeout(() => {
            const success = Math.random() > 0.3;

            if (success) {
                successMessage.classList.remove("d-none")
                errorMessage.classList.add("d-none");
                form.reset();
            } else {
                successMessage.style.add("d-none")
                errorMessage.style.remove("d-none");
            }

            setTimeout(() => {
                successMessage.style.add("d-none")
                errorMessage.style.add("d-none")
            }, 5000);
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("messageForm");
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        
        emailInput.classList.remove("is-invalid");
        
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
            emailInput.classList.add("is-invalid");
            isValid = false;
        }

        if (!isValid) {
            return; 
        }

        setTimeout(() => {
            const success = Math.random() > 0.3;

            if (success) {
                successMessage.classList.remove("d-none")
                errorMessage.classList.add("d-none");
                form.reset();
            } else {
                successMessage.style.add("d-none")
                errorMessage.style.remove("d-none");
            }

            setTimeout(() => {
                successMessage.style.add("d-none")
                errorMessage.style.add("d-none")
            }, 5000);
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("email-footer");
    const successMessage = document.getElementById("successMessage-footer");
    const errorMessage = document.getElementById("errorMessage-footer");

    if (!form || !emailInput) {
        console.error("Form atau input email tidak ditemukan!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        emailInput.classList.remove("is-invalid");

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
            emailInput.classList.add("is-invalid");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        setTimeout(() => {
            const success = Math.random() > 0.3;

            if (success) {
                successMessage.classList.remove("d-none");
                errorMessage.classList.add("d-none");
                form.reset();
            } else {
                successMessage.classList.add("d-none");
                errorMessage.classList.remove("d-none");
            }

            setTimeout(() => {
                successMessage.classList.add("d-none");
                errorMessage.classList.add("d-none");
            }, 5000);
        }, 1000);
    });
});