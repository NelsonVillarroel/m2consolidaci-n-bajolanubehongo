// cambiar fondo botón 
function cambiarColorButton(btn,url) {
    document.getElementById(btn).style.backgroundImage = `url(${url})`;
}


function resetColorButton(btn) {
    document.getElementById(btn).style.backgroundImage = "none";
}

const cambioFondo = document.getElementById('button1');
cambioFondo.addEventListener('mouseover', function(){
    cambiarColorButton("button1","../assets/img/cereal.png")
});
cambioFondo.addEventListener('mouseout', function(){
    resetColorButton("button1")
});

const cambioFondo2 = document.getElementById('button2');
cambioFondo2.addEventListener('mouseover', function(){
    cambiarColorButton("button2","../assets/img/niñorobot.png")
});
cambioFondo2.addEventListener('mouseout', function(){
    resetColorButton("button2")
});




// function cambiarColorButton1() {
//     document.getElementById('button1').style.backgroundImage = "url('../assets/img/cereal.png')";
// }


// function resetColorButton1() {
//     document.getElementById('button1').style.backgroundImage = "none";
// }

// const cambioFondo1 = document.getElementById('button1');
// cambioFondo1.addEventListener('mouseover', cambiarColorButton1);
// cambioFondo1.addEventListener('mouseout', resetColorButton1);


// // cambiar fondo botón 2
// function cambiarColorButton2() {
//     document.getElementById('button2').style.backgroundImage = "url('../assets/img/niñorobot.png')";
// }

// function resetColorButton2() {
//     document.getElementById('button2').style.backgroundImage = "none";
// }

// const cambioFondo2 = document.getElementById('button2');
// cambioFondo2.addEventListener('mouseover', cambiarColorButton2);
// cambioFondo2.addEventListener('mouseout', resetColorButton2);


// // cambiar fondo botón 3
// function cambiarColorButton3() {
//     document.getElementById('button3').style.backgroundImage = "url('../assets/img/yisus.png')";
// }

// function resetColorButton3() {
//     document.getElementById('button3').style.backgroundImage = "none";
// }

// const cambioFondo3 = document.getElementById('button3');
// cambioFondo3.addEventListener('mouseover', cambiarColorButton3);
// cambioFondo3.addEventListener('mouseout', resetColorButton3);


// // cambiar fondo botón 4
// function cambiarColorButton4() {
//     document.getElementById('button4').style.backgroundImage = "url('../assets/img/yisus.png')";
// }

// function resetColorButton4() {
//     document.getElementById('button4').style.backgroundImage = "none";
// }

// const cambioFondo4 = document.getElementById('button4');
// cambioFondo4.addEventListener('mouseover', cambiarColorButton4);
// cambioFondo4.addEventListener('mouseout', resetColorButton4);









