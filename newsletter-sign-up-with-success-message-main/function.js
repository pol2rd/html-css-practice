function send(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email-address");
    console.log(emailInput.checkValidity())
    if(!emailInput.checkValidity()) {
        emailInput.classList.add("invalid");
        document.getElementById(".inalid-email-label").classList.add("invalid");
    } else {
        const form = event.target;
        const data = new FormData(form);
        const email = data.get("email-address");
        const subscribeForm = document.querySelector(".subscribe-form");
        const subscribeSuccessWindow = document.querySelector(".subscribe-success");
        subscribeForm.classList.add("active");
        document.querySelector(".subscribe-success p b").textContent = email;
        subscribeSuccessWindow.classList.add("active");
    }
}