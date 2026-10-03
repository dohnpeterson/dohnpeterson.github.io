const rideButton = document.getElementById("rideButton");

if (rideButton) {
    rideButton.addEventListener("click", () => {
        alert("Keep pushing! 🛹🔥");
    });
}


// Responsive image map
const img = document.querySelector(".full-width");
const areas = document.querySelectorAll("area");

if (img && areas.length) {

    const originalWidth = 1536;

    areas.forEach(area => {
        area.dataset.originalCoords = area.coords;
    });

    function resizeMap() {
        const scale = img.clientWidth / originalWidth;

        areas.forEach(area => {
            const coords = area.dataset.originalCoords
                .split(",")
                .map(Number);

            area.coords = coords
                .map(coord => Math.round(coord * scale))
                .join(",");
        });
    }

    window.addEventListener("resize", resizeMap);

    // Wait for the image to load before calculating
    if (img.complete) {
        resizeMap();
    } else {
        img.addEventListener("load", resizeMap);
    }
}
