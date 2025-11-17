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

    if (acertos === total) {
        feedback.textContent = "✔️ Tudo certo! Mandou bem!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Você acertou ${acertos}/${total}. Continue!`;
        feedback.style.color = "red";
    }
});
