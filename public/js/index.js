
const socket = io();

let input = document.getElementById("test");
let btn=document.getElementById("btn");



btn.addEventListener("click",()=>{
    socket.emit("sendMsg","je receois un msg");
})

export{socket}
