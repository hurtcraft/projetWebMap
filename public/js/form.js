const form = document.getElementById("connectForm");

const sectionGuest=document.getElementById("connectGuest");
const sectionUtilisateur=document.getElementById("connectPlayer");
const sectionCreateAcc=document.getElementById("connectCreateAcc");

const choixConnexion=document.getElementById("choixConnexion");

const btnConnexion=document.getElementById("btnConnexion");
const btnGuest=document.getElementById("btnGuest");
const btnCreationAcc=document.getElementById("btnCreationAcc");

console.log(document.querySelectorAll(".subForm"));
btnConnexion.addEventListener("click",(e)=>{
    e.preventDefault();
    sectionUtilisateur.style.visibility="visible";
    choixConnexion.visibility="hidden"
})

btnGuest.addEventListener("click",(e)=>{
    e.preventDefault();
    //choixConnexion.style.visibility="hidden"
    sectionGuest.style.visibility="visible";
})

btnCreationAcc.addEventListener("click",(e)=>{
    e.preventDefault();    
    sectionCreateAcc.style.visibility="visible"
})