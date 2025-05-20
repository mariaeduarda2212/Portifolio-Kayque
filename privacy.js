// DRONE
document.addEventListener("mousemove", function(e) {
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = `${e.clientX - 10}px`;
    trail.style.top = `${e.clientY - 10}px`;

    document.getElementById("trail-container").appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 600);
});
