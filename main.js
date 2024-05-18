function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if (elemento === null){
        console.log('Element not found.')
    }

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    //console.log(idAudio)

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}



//Atividade 01*****************************
// let contador = 0;

// const tecla = document.querySelector('.tecla_pom');

// function addCount(){
//     contador = contador + 1;
//     console.log(contador);
// }

// tecla.onclick = addCount;

//Atividade 02*****************************

// const teclas = document.querySelectorAll('.tecla');

// console.log(teclas);

//Atividade 03*****************************

// let contador = 1;

// function addCount(){
//     console.log(contador)
//     contador++;
// }

// teclas[3].onclick = addCount;

//Atividade 04 e 05*****************************

// let contador = 0;
// const listaDeTeclas = document.querySelectorAll('.tecla')

//  function addCount(){
//     console.log(contador)
//     contador++;
// }

// for(let i = 0; i<listaDeTeclas.length; i++){
//     listaDeTeclas[i].onclick = addCount;
// }