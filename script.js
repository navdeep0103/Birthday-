function openEnvelope(){

const env =
document.getElementById("envelope");

env.style.transform =
"scale(0.9) rotate(-5deg)";

setTimeout(()=>{

window.location.href =
"letter.html";

},500);

}