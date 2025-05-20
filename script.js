// ABOUT
var currentPopup = null; // Variável global para armazenar o popup atual

function openPopup(texto) {
    // Fechar o popup atual se existir
    if (currentPopup) {
        document.body.removeChild(currentPopup);
        currentPopup = null;
    }

    // Criar elemento de popup
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = texto;

    // Adicionar popup ao corpo do documento
    document.body.appendChild(popup);

    // Atribuir o popup atual à variável global
    currentPopup = popup;

    // Fechar popup ao clicar fora dele
    popup.onclick = function() {
        document.body.removeChild(popup);
        currentPopup = null; // Limpar a variável global ao fechar o popup
    };
}


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

// PREMIOS
document.addEventListener("DOMContentLoaded", function() {
    const awardSection = document.querySelector(".award-container");

    awardSection.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
    });

    awardSection.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});
