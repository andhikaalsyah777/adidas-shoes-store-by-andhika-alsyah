function tampilJam() {
    const jam = new Date();
    document.getElementById("jam").innerHTML =
        jam.toLocaleDateString() + " | " + jam.toLocaleTimeString();
}

setInterval(tampilJam, 1000);

// ===== JAM =====
function tampilJam() {
    const jam = new Date();
    const elemenJam = document.getElementById("jam");
    if (elemenJam) {
        elemenJam.innerHTML =
            jam.toLocaleDateString() + " | " + jam.toLocaleTimeString();
    }
}
setInterval(tampilJam, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("🎉 Pesanan berhasil dikirim!\nTerima kasih telah berbelanja.");
            form.reset();
        });
    }
});