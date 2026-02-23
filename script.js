let interview = 0;
let rejected = 0;
let currentFilter = 'all';

function updateTotal() {
    const totalCards = document.querySelectorAll('.job-card').length;
    document.getElementById("totalCount").innerText = totalCards;
}

function refreshCounts() {
    document.getElementById("interviewCount").innerText = interview;
    document.getElementById("rejectedCount").innerText = rejected;
    updateTotal();
    applyFilter(currentFilter);
}

function setInterview(btn) {
    const card = btn.closest('.job-card');
    const statusEl = card.querySelector('.status');
    const old = statusEl.innerText;

    if (old === 'Interview') return;

    if (old === 'Rejected') rejected--;
    interview++;

    statusEl.innerText = 'Interview';
    card.dataset.status = 'Interview';

    refreshCounts();
}

function setRejected(btn) {
    const card = btn.closest('.job-card');
    const statusEl = card.querySelector('.status');
    const old = statusEl.innerText;

    if (old === 'Rejected') return;

    if (old === 'Interview') interview--;
    rejected++;

    statusEl.innerText = 'Rejected';
    card.dataset.status = 'Rejected';

    refreshCounts();
}

/* ✅ IMAGE DELETE BUTTON ACTIVE */
function deleteCard(img) {
    const card = img.closest('.job-card');
    const status = card.dataset.status;

    if (status === 'Interview') interview--;
    if (status === 'Rejected') rejected--;

    card.remove();
    refreshCounts();
}

function applyFilter(type) {
    currentFilter = type;
    const cards = document.querySelectorAll('.job-card');
    let shown = 0;

    cards.forEach(card => {
        if (type === 'all' || card.dataset.status === type) {
            card.classList.remove('hidden');
            shown++;
        } else {
            card.classList.add('hidden');
        }
    });

    document.getElementById('jobsShown').innerText = shown;
}

/* ✅ REMOVE HREF JUMP + FILTER FIX */
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.filter').forEach(btn => {

        btn.addEventListener('click', function (e) {

            e.preventDefault(); // 🔥 removes href jump

            applyFilter(this.dataset.filter);
        });
    });

    updateTotal();
    applyFilter('all');
});