'use strict';
 
// const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
 
const closeModal = function (modal) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
 
btnsOpenModal.forEach(btn => btn.addEventListener('click', e => {
  const modalId = `modal-${e.target.id.slice(-1)}`;
  const modal = document.querySelector(`#${modalId}`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}));
 
btnsCloseModal.forEach(btn => btn.addEventListener('click', e => {
  const modal = document.querySelector('.modal:not(.hidden)');
  if (!modal) return;
  closeModal(modal);
}));
 
document.addEventListener('keydown', function (e) {
  const modal = document.querySelector('.modal:not(.hidden)');
  if (!modal) return;
  console.log(modal);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(modal);
  }
});