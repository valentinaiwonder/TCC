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
            feedback.textContent = '✔️ Certo!';
            feedback.style.color = 'green';
        }

    });
});
