//Atividade 01:
document.querySelector('.tecla_tim');

//Atividade 02:
let tecla = document.querySelector('.tecla_tim');
tecla.onclick = function(){
    alert("Fui clicado!!");
}

function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();
}