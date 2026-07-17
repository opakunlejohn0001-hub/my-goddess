const button = document.getElementById("startButton");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

button.onclick = function () {

    music.play();

    button.style.display = "none";

    letter.style.display = "block";

    letter.style.opacity = "0";

    setTimeout(() => {
        letter.style.transition = "1.5s";
        letter.style.opacity = "1";
    }, 300);

    letter.scrollIntoView({
        behavior: "smooth"
    });

};

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = "-100px";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 1200);

for(let i=0;i<120;i++){

    let star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*window.innerHeight+"px";

    star.style.animationDelay=Math.random()*3+"s";

    document.body.appendChild(star);


function createPetal(){

    const petal = document.createElement("div");

    petal.innerHTML="🌹";

    petal.style.position="fixed";

    petal.style.left=Math.random()*window.innerWidth+"px";

    petal.style.top="-50px";

    petal.style.fontSize=(20+Math.random()*15)+"px";

    petal.style.transition="8s linear";

    petal.style.pointerEvents="none";

    petal.style.zIndex="999";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.style.top=window.innerHeight+100+"px";

        petal.style.transform="rotate(360deg)";

    },100);

    setTimeout(()=>{

        petal.remove();

    },8000);

}

setInterval(createPetal,1800);