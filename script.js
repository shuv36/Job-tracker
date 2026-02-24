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

