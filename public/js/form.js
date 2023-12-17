import {socket} from "./index.js"
import { createPlayer ,updateWaitingRoom} from "./utils.js";

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

const waitingRoomPseudoPlayer1=document.getElementById("waitingRoomPseudoPlayer1");
const waitingRoomPseudoPlayer2=document.getElementById("waitingRoomPseudoPlayer2");


const pseudoInput=sectionGuest.querySelector(".pseudo");
const idSalleConnectGuest=document.querySelector("#idSalleConnectGuest");

let pseudo=null;
let idRoom=null;
let RoomMaker=false;

btnGuest.addEventListener("click",(e)=>{
    e.preventDefault();
    sectionUtilisateur.style.display = "none";
    choixConnexion.style.display="none";
    sectionGuest.style.display="flex";

    btnCreateRoom.style.display="flex";
    btnJoinRoom.style.display="flex";
    
    
})

btnCreateRoom.addEventListener("click",(e)=>{

    // créateur salle
    e.preventDefault();
    pseudo=pseudoInput.value;
    if(pseudo==""){
        console.log("pseudo null afficher une erreur sur la page");
        return;
    }

    socket.emit("LookingForSalleID");
    
    socket.on("sendSalleID",(SalleID)=>{
        waitingRoom.style.display="flex";
        idRoomTitle.innerText="id de la salle : "+SalleID;
        waitingRoomPseudoPlayer1.innerText="P1: "+ pseudo;
        let p = createPlayer(socket.id,pseudo,true,SalleID);
        socket.emit("joiningRoom",(p))
    })
    
    socket.on("playerJoined",(room)=>{
        sectionGuest.style.display="none";
        btnCreateRoom.style.display="none";
        btnJoinRoom.style.display="none";

        waitingRoom.style.display="flex";
        idRoomTitle.innerText="id de la salle : "+room.id;
        updateWaitingRoom(waitingRoomPseudoPlayer1,waitingRoomPseudoPlayer2,room);
    })
})

btnJoinRoom.addEventListener("click",(e)=>{
    e.preventDefault();
    idSalleConnectGuest.style.display="flex";
    idRoom=idSalleConnectGuest.value;
    console.log(idRoom.length)
    if(idRoom=="" || idRoom.length!=8){
        console.log("numero de salle incorrect");
        return;
    }
    pseudo=pseudoInput.value;
    let p = createPlayer(socket.id,pseudo,false,idRoom);

    socket.emit("joiningRoom",(p));
    socket.on("playerJoined",(room)=>{
            
            sectionGuest.style.display="none";
            btnCreateRoom.style.display="none";
            btnJoinRoom.style.display="none";

            waitingRoom.style.display="flex";
            idRoomTitle.innerText="id de la salle : "+idRoom;
            updateWaitingRoom(waitingRoomPseudoPlayer1,waitingRoomPseudoPlayer2,room);
            //waitingRoomPseudoPlayer2.innerText="P2: "+ pseudo;
            
    })

})
const btnLancerJeu=document.getElementById("lancerJeu");

socket.on("roomReady",(room)=>{
    
    btnLancerJeu.style.display="flex";
    //form.style.display="none";
    
    btnLancerJeu.addEventListener("click",(e)=>{
        e.preventDefault();
        
        socket.emit("jeuLancer",room);
    })

})
