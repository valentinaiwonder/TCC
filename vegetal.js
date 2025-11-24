// Remove acentos pra comparar sem frescura
function normalize(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();
}

document.getElementById("check").addEventListener("click", () => {
    const fields = document.querySelectorAll(".answer");
    let acertos = 0;

    fields.forEach(input => {
        const resposta = normalize(input.value);
        const correta = normalize(input.dataset.org);

        if (resposta === correta) {
            input.classList.remove("wrong");
            input.classList.add("correct");
            acertos++;
        } else {
            input.classList.remove("correct");
            input.classList.add("wrong");
        }
    });

    const total = fields.length;
    const feedback = document.getElementById("feedback");

    const popup = document.getElementById("popup");
    const popupMsg = document.getElementById("popup-msg");

    if (acertos === total) {
        popupMsg.textContent = "✔️ Parabéns! Mandou muito bem!";
    } else {
        popupMsg.textContent = `Você acertou ${acertos}/${total}. Tente novamente`;
    }

    popup.classList.remove("hidden");

    // fechar pop-up
    document.getElementById("close-popup").onclick = () => {
        popup.classList.add("hidden");
    };

});
