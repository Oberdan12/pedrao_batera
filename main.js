function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);
  
    if(elemento != null && elemento.localName === 'audio'){
    
            elemento.play();
        }else{
            alert('Elemento não encontrado');
        }
    }

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
  
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

        
    tecla.onkeydown = function (evento){

        console.log(evento.code == 'Space' || evento.code == 'Enter');

        if(evento.code === 'space'){
             tecla.classList.add('ativa');

        }

    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');

    }

}