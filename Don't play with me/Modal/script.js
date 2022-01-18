'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const OpenModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

};
for(let i = 0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',OpenModal);
};


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);

//Handling keyprees event 
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        };
    };
});











