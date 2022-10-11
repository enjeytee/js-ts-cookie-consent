const modal = document.querySelector(".modal") as HTMLDivElement;
const closeBtn = document.getElementById("modal-close-btn") as HTMLButtonElement;
setTimeout(() => {
    modal.style.display = "inline";
}, 1500);
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});