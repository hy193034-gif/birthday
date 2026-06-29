const craft=document.getElementById("craftClosed");

const button=document.getElementById("openCraft");

const next=document.getElementById("continuePage7");

button.onclick=()=>{

craft.style.transition=".4s";

craft.style.transform="scale(1.05)";

craft.style.opacity="0";

button.style.display="none";

setTimeout(()=>{

craft.style.display="none";

window.open(
"https://drive.google.com/file/d/1sVkSv3NzieHMWzHrc9H42XZorD-PMrJf/view?usp=drive_link",
"_blank"
);

next.style.display="block";

},400);

};