// cambiar fondo botón 
function cambiarColorButton(btn,url) {
    document.getElementById(btn).style.backgroundImage = `url(${url})`;
}

function resetColorButton(btn) {
    document.getElementById(btn).style.backgroundImage = "none";
}

// botón 1
const cambioFondo = document.getElementById('button1');
cambioFondo.addEventListener('mouseover', function(){
    cambiarColorButton("button1","../assets/img/vestido.png")
});
cambioFondo.addEventListener('mouseout', function(){
    resetColorButton("button1")
});

// botón 2
const cambioFondo2 = document.getElementById('button2');
cambioFondo2.addEventListener('mouseover', function(){
    cambiarColorButton("button2","../assets/img/cereal.png")
});
cambioFondo2.addEventListener('mouseout', function(){
    resetColorButton("button2")
});

// botón 3
const cambioFondo3 = document.getElementById('button3');
cambioFondo3.addEventListener('mouseover', function(){
    cambiarColorButton("button3","../assets/img/bailarina.png")
});
cambioFondo3.addEventListener('mouseout', function(){
    resetColorButton("button3")
});

// botón 4
const cambioFondo4 = document.getElementById('button4');
cambioFondo4.addEventListener('mouseover', function(){
    cambiarColorButton("button4","../assets/img/yisus.png")
});
cambioFondo4.addEventListener('mouseout', function(){
    resetColorButton("button4")
});












