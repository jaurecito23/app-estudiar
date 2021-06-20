let botonesAgregarRespuesta = document.querySelectorAll('.boton-agregar-respuesta');
const botonesAgregarPregunta = document.querySelectorAll('.boton-agregar-pregunta');
let divPregunta = document.querySelector('.div-preguntas');
// funcion  para crear preguntas 
let divRespuesta = document.querySelector('.respuestas');

let cantidadDeRespuestas = 1

function crearRespuestas(cantidad){
    
    for(let i = 1; i < cantidad + 1; i++ ){
        
        numeroRespuesta = cantidadDeRespuestas + 1;       
        divRespuesta.innerHTML = divRespuesta.innerHTML + ` <div class='respuesta'>
        <label> Respuesta ${numeroRespuesta} </label>
        <input name="respuesta${numeroRespuesta}" type='text' id="respuesta${numeroRespuesta}" placeholder="Respuesta${numeroRespuesta}"> 
    </div>`
        cantidadDeRespuestas++;

    }
}


// Funcion Agregar preguntas

let cantidadDePreguntas = 1;
function crearPreguntas(cantidad){


    for(let i =  1; i < cantidad+1;i++){

        numeroPregunta = cantidadDePreguntas + 1; 

        divPregunta.innerHTML = divPregunta.innerHTML + `   
        <div class='pregunta${numeroPregunta}'>
            <div class="formulario--campo">
                <label class='pregunta' for='pregunta ${numeroPregunta}'> Pregunta ${numeroPregunta} </label>  
                <input id='pregunta ${numeroPregunta}' name='pregunta${numeroPregunta}' type='text' placeholder="Pregunta ${numeroPregunta}">  
            </div>
            <div  class="formulario--campo">
                <div class='respuestas${numeroPregunta}'>
                    <div class="respuesta${numeroPregunta}">
                        <label> Respuesta 1 </label>
                        <input name="respuesta1" type='text' id="respuesta1" placeholder="Respuesta1"> 
                    </div>
                </div>
                <button class='boton-agregar-respuesta boton--naranja'> Agregar Respuesta + </button>
            </div>
            </div>`
            cantidadDePreguntas++;
        }

        divRespuesta = document.querySelector(`.respuestas${cantidadDePreguntas}`)
        
        botonesAgregarRespuesta = document.querySelectorAll('.boton-agregar-respuesta');
        
        botonesAgregarRespuesta.forEach(function(boton){
            //   console.log(boton)
            boton.addEventListener('click' , function(e){
                e.preventDefault()
                console.log('hola')
        crearRespuestas(1);

    })  


})
}



// Agregando una respuesta


    botonesAgregarRespuesta.forEach(function(boton){
               //   console.log(boton)
           boton.addEventListener('click' , function(e){
               e.preventDefault()
               crearRespuestas(1);
   
           })  
   
   
    })


 // Agregando una pregunta

 botonesAgregarPregunta.forEach(function(boton){

    boton.addEventListener('click', function(e){
        e.preventDefault();
        crearPreguntas(1);
    })
 })









