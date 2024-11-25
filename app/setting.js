function openModal(setting) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = setting.charAt(0).toUpperCase() + setting.slice(1).replace(/([A-Z])/g, ' $1');
    modalBody.innerHTML = `<p>This is where the ${setting} management interface will be implemented.</p>`;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
