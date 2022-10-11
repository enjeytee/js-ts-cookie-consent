"use strict";
const modal = document.querySelector(".modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const loginForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
setTimeout(() => {
    modal.style.display = "inline";
}, 1500);
modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    // alert("Form sumbitted!")
    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="
        </div>
    `;
});
//# sourceMappingURL=index.js.map