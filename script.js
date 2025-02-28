function showFollowUp() {
    document.getElementById('initialPopup').classList.add('hidden');
    document.getElementById('followUpPopup').classList.remove('hidden');
}

function subscribe() {
    document.getElementById('initialPopup').classList.add('hidden');
    document.getElementById('followUpPopup').classList.add('hidden');
    document.getElementById('confirmationPopup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('initialPopup').classList.add('hidden');
    document.getElementById('followUpPopup').classList.add('hidden');
    document.getElementById('confirmationPopup').classList.add('hidden');
}

// Show initial popup on page load (for demo purposes)
window.onload = function() {
    document.getElementById('initialPopup').classList.remove('hidden');
};