let count = 0;
const badge = document.getElementById("cartCount");
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        count++;
        badge.textContent = count;
    });
});