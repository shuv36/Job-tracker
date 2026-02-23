let interview = 0;
let rejected = 0;

function setInterview(btn){
    interview++;
    document.getElementById("interviewCount").innerText = interview;

    btn.parentElement.querySelector(".status").innerText = "Interview";
}

function setRejected(btn){
    rejected++;
    document.getElementById("rejectedCount").innerText = rejected;

    btn.parentElement.querySelector(".status").innerText = "Rejected";
}