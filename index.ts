const modal = document.querySelector(".modal") as HTMLDivElement;
const modalCloseBtn = document.getElementById("modal-close-btn") as HTMLButtonElement;
const loginForm = document.getElementById("consent-form") as HTMLFormElement;
const modalText = document.getElementById("modal-text") as HTMLDivElement;
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
    `
});