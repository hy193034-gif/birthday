const housePage8=document.getElementById("houseCraft");

const buttonPage8=document.getElementById("openHouse");

const nextPage8=document.getElementById("continuePage8");

buttonPage8.onclick=()=>{

housePage8.style.transition=".4s";

housePage8.style.opacity="0";

housePage8.style.transform="scale(1.05)";

buttonPage8.style.display="none";

setTimeout(()=>{

housePage8.style.display="none";

window.open(
"https://drive.google.com/file/d/126Ou8RFLugSqmvhdeCbWAz_l-GvwyUVh/view?usp=drive_link",
"_blank"
);

nextPage8.style.display="block";

},400);

};