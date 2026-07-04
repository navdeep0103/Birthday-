const message = `Dearest Birthday Human,

There's no card big enough for everything I'd like to say, so I made you a little garden—with a song, our pictures, and a few of my favourite wishes for the year ahead.

Thank you for the small and unseen things:
the way you check in,
the jokes only we get,
the quiet patience when I'm being too much.

I noticed.
I still notice.

I hope today you feel celebrated.

I hope you eat something delicious that you didn't have to make, and that someone tells you you're loved.

(You are.)

Most of all, I hope this year ahead feels, for one whole trip around the sun, exactly the way you've always made me feel...

Completely.
Completely loved.

🫶🏻

With all my love,

— Your Best Friend ❤️`;

const typing = document.getElementById("typing");
const cursor = document.getElementById("cursor");
const wrapBtn = document.getElementById("wrapBtn");
const paper = document.getElementById("paper");

let i = 0;

function typeLetter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        paper.scrollTop = paper.scrollHeight;

        i++;

        // Natural handwriting speed
        let speed = 55 + Math.random()*45;

        // Space ke baad thoda fast
        if(message.charAt(i-1)==" ") speed = 25;

        // Full stop ya comma pe pause
        if(".!?,".includes(message.charAt(i-1)))
            speed = 450;

        setTimeout(typeLetter,speed);

    }else{

        cursor.style.display="none";

        wrapBtn.style.display="block";

        wrapBtn.animate([
            {opacity:0,transform:"translateY(25px)"},
            {opacity:1,transform:"translateY(0)"}
        ],{
            duration:700,
            fill:"forwards"
        });

    }

}

window.onload=()=>{

    setTimeout(typeLetter,800);

}

wrapBtn.onclick=()=>{

paper.classList.add("fold");

setTimeout(()=>{

flowerBlast();

},850);

setTimeout(()=>{

history.back();

},3600);

}
function flowerBlast(){

const area=document.getElementById("flowerBlast");

const flowers=["🌸","🌺","🌷","🌹","💮","🌼","🌸","✨"];

for(let i=0;i<45;i++){

const f=document.createElement("div");

f.className="flower";

f.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

const x=(Math.random()-0.5)*900;

const y=-(Math.random()*700+250);

f.style.setProperty("--x",x+"px");
f.style.setProperty("--y",y+"px");

f.style.animation=`explode ${1.8+Math.random()}s ease-out forwards`;

area.appendChild(f);

setTimeout(()=>f.remove(),3000);

}

if(navigator.vibrate){

navigator.vibrate(120);

}

}