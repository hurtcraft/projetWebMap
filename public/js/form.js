import {socket} from "./index.js"


const form = document.getElementById("connectForm");
const sectionGuest=document.getElementById("connectGuest");
const sectionUtilisateur=document.getElementById("connectPlayer");
const sectionCreateAcc=document.getElementById("connectCreateAcc");

const choixConnexion=document.getElementById("choixConnexion");

const btnConnexion=document.getElementById("btnConnexion");
const btnGuest=document.getElementById("btnGuest");
const btnCreationAcc=document.getElementById("btnCreationAcc");

const btnCreateRoom=document.getElementById("btnCreateRoom");
const btnJoinRoom=document.getElementById("btnJoinRoom");


const connectCreateRoom=document.getElementById("connectCreateRoom")
const connectJoinRoom=document.getElementById("connectJoinRoom");

const submitConnectAs=document.getElementById("submitConnectAs");
const submitConnectRoom=document.getElementById("submitConnectRoom");

let pseudo=null;
let idRoom=null;
let RoomMaker=false;

btnGuest.addEventListener("click",(e)=>{
    e.preventDefault();
    choixConnexion.style.display="none";
    sectionGuest.style.display="flex";
    submitConnectAs.style.display="flex";

    
})
btnCreateRoom.addEventListener("click",(e)=>{
    e.preventDefault();
    RoomMaker=true; // test à enlever plus tard

})

submitConnectAs.addEventListener("click",(e)=>{
    e.preventDefault();
    pseudo=sectionGuest.querySelector(".pseudo");
    if(idRoom!=null){
        socket.emit("sendGuestInfo",pseudo.value,RoomMaker,); //true ==> créateur de la salle
    }
    else{
        socket.emit("sendGuestInfo",pseudo.value,RoomMaker);
    }
    
})

submitConnectRoom.addEventListener("click",(e)=>{
    e.preventDefault();
    socket.emit("createOrJoinRoom","create");
})
