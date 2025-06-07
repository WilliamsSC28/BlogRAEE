document.addEventListener('DOMContentLoaded', () => {
    const infoModal = document.getElementById('infoModal');

    if (!infoModal) return;

    infoModal.addEventListener('show.bs.modal', function (event) {
        const trigger = event.relatedTarget;

        const title = trigger.getAttribute('data-title');
        const content = trigger.getAttribute('data-content');

        const modalTitle = infoModal.querySelector('.modal-title');
        const modalBodyContent = infoModal.querySelector('#modalContent');

        modalTitle.textContent = title;
        modalBodyContent.textContent = content;
        modalImage.alt = title;
    });
});
