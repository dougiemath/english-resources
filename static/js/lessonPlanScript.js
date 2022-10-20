let warmersTable = document.getElementById("warmers-table");
let youngLearnersTable = document.getElementById("young-learners-table");
let eapTable = document.getElementById("eap-table");
let systemsTable = document.getElementById("systems-table");
let skillsTable = document.getElementById("skills-table");

function showWarmersTable(){
    if (warmersTable.style.display = "none") {
        warmersTable.style.display = "initial";
    }
}

function hideWarmersTable(){
    if (warmersTable.style.display = "initial") {
        warmersTable.style.display = "none";
    }
}

function showYLTable(){
    if (youngLearnersTable.style.display = "none") {
        youngLearnersTable.style.display = "initial";
    }
}

function hideYLTable(){
    if (youngLearnersTable.style.display = "initial") {
        youngLearnersTable.style.display = "none";
    }
}

function showEAPTable(){
    if (eapTable.style.display = "none") {
        eapTable.style.display = "initial";
    }
}

function hideEAPTable(){
    if (eapTable.style.display = "initial") {
        eapTable.style.display = "none";
    }
}

function showSystemsTable(){
    if (systemsTable.style.display = "none") {
        systemsTable.style.display = "initial";
    }
}

function hideSystemsTable(){
    if (systemsTable.style.display = "initial") {
        systemsTable.style.display = "none";
    }
}

function showSkillsTable(){
    if (skillsTable.style.display = "none") {
        skillsTable.style.display = "initial";
    }
}

function hideSkillsTable(){
    if (skillsTable.style.display = "initial") {
        skillsTable.style.display = "none";
    }
}


function searchWarmers() {
    let input = document.getElementById('warmer-searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('warmers');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table-row";                 
        }
    }
}

function searchYL() {
    let input = document.getElementById('young-learners-searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('young-learners');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table-row";                 
        }
    }
}

function searchEAP() {
    let input = document.getElementById('eap-searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('eap');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table-row";                 
        }
    }
}

function searchSystems() {
    let input = document.getElementById('systems-searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('systems');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table-row";                 
        }
    }
}

function searchSkills() {
    let input = document.getElementById('skills-searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('skills');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table-row";                 
        }
    }
}

function displayDeleteBtn() {
    let deleteBtn = document.getElementById('delete-lesson-plan-button');
    
    if (deleteBtn.style.display = "none") {
        deleteBtn.style.display = "initial";
    }
}

function hideDeleteBtn() {
    let deleteBtn = document.getElementById('delete-lesson-plan-button');
    
    if (deleteBtn.style.display = "initial") {
        deleteBtn.style.display = "none";
    }
}