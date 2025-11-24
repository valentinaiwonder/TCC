const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');
const feedback = document.getElementById('feedback');
let dragged = null;

draggables.forEach(img => {
    img.addEventListener('dragstart', e => {
        dragged = e.target;
        e.target.style.opacity = '0.6';
    });

    img.addEventListener('dragend', e => {
        e.target.style.opacity = '1';
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault();
        zone.classList.add('hover');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('hover');
    });

    zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('hover');

        if (dragged.dataset.org === zone.dataset.org) {
            document.getElementById('cell-area').appendChild(dragged);
            dragged.style.position = 'absolute';
            dragged.style.top = zone.style.top;
            dragged.style.left = zone.style.left;

            zone.classList.add('correct');

            feedback.textContent = '✔️ Certo!';
            feedback.style.color = 'green';

            // 👉 verifica se terminou tudo
            const finished = [...document.querySelectorAll('.drop-zone')]
                .every(z => z.classList.contains('correct'));

            if (finished) {
                const popup = document.getElementById("popup");
                const popupMsg = document.getElementById("popup-msg");
                popupMsg.textContent = "Parabéns! Você completou toda a célula!";
                popup.classList.remove("hidden");
            }

        } else {
            feedback.textContent = '❌ Errado! Tente novamente.';
            feedback.style.color = 'red';
        }

        // fechar pop-up
        document.getElementById("close-popup").onclick = () => {
            popup.classList.add("hidden");
        };
    });
});
