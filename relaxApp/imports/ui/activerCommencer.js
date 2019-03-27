import './commencer.html'

let commencer = document.getElementById("commencer");
commencer.addEventListener ("click", maFonction);

function maFonction(){
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = "Hello world";
}
