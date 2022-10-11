const modal = document.querySelector(".modal") as HTMLDivElement;
const modalCloseBtn = document.getElementById("modal-close-btn") as HTMLButtonElement;
const consentForm = document.getElementById("consent-form") as HTMLFormElement;
const modalText = document.getElementById("modal-text") as HTMLDivElement;
const declineBtn = document.getElementById("decline-btn") as HTMLButtonElement;
const modalChoiceBtns = document.getElementById("modal-choice-btns") as HTMLDivElement;
setTimeout(() => {
    modal.style.display = "inline";
}, 1500);
modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
consentForm.addEventListener("submit", event => {
    event.preventDefault();
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="./images/loading.svg"/>
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    `
    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get("fullName");
    const email = consentFormData.get("email");
    setTimeout(() => {
        const uploadText = document.getElementById("uploadText") as HTMLParagraphElement;
        uploadText.innerText = "Making the sale..."
        setTimeout(() => {
            const modalInner = document.getElementById("modal-inner") as HTMLDivElement;
            modalInner.innerHTML = `
                <h2>Thanks <span class="modal-display-name">${fullName}</span> you sucker!</h2>
                <p>We just sold the rights to your eternal soul.</p>
                <div class="idiot-gif">
                    <img src="./images/pirate.gif">
                </div>
            `
            modalCloseBtn.disabled = false;
        }, 1500);
    }, 1500);
});
declineBtn.addEventListener("mouseover", () => {
    modalChoiceBtns.classList.toggle("reverse");
});
