const socket = new WebSocket('ws://localhost:3000');

// input functionality
function sendMessage(e){
    e.preventDefault()
        const input = document.querySelector('input');
        if(input.value){
            socket.send(input.value);
            input.value= " ";
        }
        input.focus();
    }

    // button functionlity 

    document.querySelector('form')
    .addEventListener("submit",sendMessage);

    // listing the messages  from server 
    socket.addEventListener("message",({data}) =>{
        const li = document.createElement('li');
        li.textContent = data;
        document.querySelector('ul').appendChild(li);
    })
