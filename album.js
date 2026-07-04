const photos = [
{
    img:"photo1.jpg",
    caption:"Every picture with you becomes my favourite memory. ❤️"
},
{
    img:"photo2.jpg",
    caption:"Some memories stay in my heart forever. 🌸"
},
{
    img:"photo3.jpg",
    caption:"Every smile of you is my favourite story. 💖"
}
];

let current = 0;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const count = document.getElementById("count");

const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function updatePhoto(){

    photo.classList.add("change");

    setTimeout(()=>{

        photo.src = photos[current].img;
        caption.innerHTML = photos[current].caption;

        count.textContent =
        String(current+1).padStart(2,"0");

        dots.forEach(dot=>dot.classList.remove("active"));
        dots[current].classList.add("active");

        photo.classList.remove("change");

    },220);

}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current>=photos.length){

        current=0;

    }

    updatePhoto();

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=photos.length-1;

    }

    updatePhoto();

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        updatePhoto();

    });

});


// Swipe Support

let startX = 0;

photo.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

photo.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextBtn.click();

    }

    if(endX-startX>50){

        prevBtn.click();

    }

});


// Keyboard Support

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});


// Initial

updatePhoto();