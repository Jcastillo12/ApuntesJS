'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// El querySelectorAll permite recorrer por todos los elementos iguales y los almacena
// en distintos nodos. Luego se puede recorrer. Mejor que usar multiples ID.
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);


const openModal=function(){
    //En este caso, la clase no nesecita colocar el . de la clase.
    // Usar classList es una buena manera de manipular clases.
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
}

const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Recorre todo el nodo del selector show-modal
for(let i =0; i< btnOpenModal.length; i++){
    //console.log(btnOpenModal[i].textContent);
    btnOpenModal[i].addEventListener('click',openModal)
   
}


btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)

// El parametro e = significa events
document.addEventListener('keydown',function(e){
    console.log(e);
    //console.log(e.key);
    if(e.key==='Escape'){
        //console.log(`Esc was pressed`);
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})