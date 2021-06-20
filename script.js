



// Boton Ordenar por

const botonOrdenar = document.querySelectorAll('.ordenar--boton button')
const opcionesOrdenar = document.querySelectorAll('.ordenar--opcion')


botonOrdenar.forEach(function(boton){

    boton.addEventListener('mouseover',function(){

        opcionesOrdenar.forEach(function(boton){

            if(boton.classList.contains('oculto')){

                boton.classList.remove('oculto');
                
            }

        boton.addEventListener('mouseout',function(e){
            if(e.relatedTarget.classList[0] !== 'boton--naranja'){

                opcionesOrdenar.forEach(function(boton){
                    if(!boton.classList.contains('oculto')){
                        boton.classList.add('oculto');
                    }
    
                })

            }
        })

        })
    })
    boton.addEventListener('mouseout',function(e){

        
        if(e.relatedTarget.classList[0] !== 'boton--naranja'){

               
         opcionesOrdenar.forEach(function(boton){
    
             if(!boton.classList.contains('oculto')){
                 boton.classList.add('oculto');
             }
             })
    
        

        }
    })
    boton.addEventListener('click',function(){

        opcionesOrdenar.forEach(function(boton){

            if(boton.classList.contains('oculto')){

                boton.classList.remove('oculto')
                
            }else{
                
                
                boton.classList.add('oculto')

            }

        })
        
   
    })


})