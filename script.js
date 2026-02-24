let interview = 0;
let rejected = 0;
let currentFilter = 'all';

function updateTotal() {
    const totalCards = document.querySelectorAll('.job-card').length;
      document.getElementById("totalCount").innerText = totalCards;
}

function   refreshCounts() {
    document.getElementById ("interviewCount")
    .innerText = interview;
     document.getElementById("rejectedCount")
    .innerText = rejected;
      updateTotal();
     applyFilter(currentFilter);
}


function setInterview(btn) {



    const card = btn.closest('.job-card');
      const statusEl = card.querySelector('.status');
     const old = statusEl.innerText;

    if (old ==='Interview') return;


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



    cards.forEach (c => {
        if (type === 'all' || c.dataset.status === type) {
            c.classList.remove('hidden');
            shown++;
         } else {
            c.classList.add('hidden');
        }
    });

    document.getElementById('jobsShown').innerText = shown;

    const empty = document.getElementById("emptyMessage");
     if(empty) empty.style.display = shown === 0 ? "block" : "none";
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.filter').forEach(btn => {
         btn.onclick = () => applyFilter(btn.dataset.filter);
    });

    document.querySelectorAll('.job-card').forEach(card=>{
        if(card.dataset.status === 'Interview') interview++;
         if(card.dataset.status === 'Rejected') rejected++;
    });

    updateTotal();
      refreshCounts();
}); 