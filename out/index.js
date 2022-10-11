"use strict";
const modal = document.querySelector(".modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");
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
    `;
    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get("fullName");
    const email = consentFormData.get("email");
    setTimeout(() => {
        const uploadText = document.getElementById("uploadText");
        uploadText.innerText = "Making the sale...";
        setTimeout(() => {
            const modalInner = document.getElementById("modal-inner");
            modalInner.innerHTML = `
                <h2>Thanks <span class="modal-display-name">${fullName}</span> you sucker!</h2>
                <p>We just sold the rights to your eternal soul.</p>
                <div class="idiot-gif">
                    <img src="./images/pirate.gif">
                </div>
            `;
            modalCloseBtn.disabled = false;
        }, 1500);
    }, 1500);
});
declineBtn.addEventListener("mouseover", () => {
    modalChoiceBtns.classList.toggle("reverse");
});
//# sourceMappingURL=index.js.map