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


const waitingRoom=document.getElementById("waitingRoom");
const idRoomTitle=document.getElementById("idRoomTitle");
let pseudo=null;
let idRoom=null;
let RoomMaker=false;

btnGuest.addEventListener("click",(e)=>{
    e.preventDefault();
    choixConnexion.style.display="none";
    sectionGuest.style.display="flex";

    btnCreateRoom.style.display="flex";
    btnJoinRoom.style.display="flex";
    console.log(btnCreateRoom)
    
})

btnCreateRoom.addEventListener("click",(e)=>{
    e.preventDefault();
    socket.emit("LookingForSalleID");
    
    socket.on("sendSalleID",(SalleID)=>{
        waitingRoom.style.display="flex";
        idRoomTitle.innerText="id de la salle : "+SalleID;
        console.log("ID Salle : "+SalleID);
    })
})
