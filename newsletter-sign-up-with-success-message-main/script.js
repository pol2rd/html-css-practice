function send(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const email = data.get("email-address");
    const subscribeForm = document.querySelector(".subscribe-form");
    const subscribeSuccessWindow = document.querySelector(".subscribe-success");
    subscribeForm.classList.add("active");
    document.querySelector(".subscribe-success p b").textContent = email;
    subscribeSuccessWindow.classList.add("active");
}

function invalidEmail() {
    const emailInput = document.getElementById("email-address");
    const invalidEmailLabel = document.querySelector(".invalid-email-label");
    emailInput.classList.add("invalid");
    invalidEmailLabel.classList.add("invalid");
}