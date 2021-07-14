'use strict';
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btn = document.querySelectorAll('.btn-cake');
let CakeName = document.querySelector('.cake-modal-name').textContent;

const showModal = function () {
	modal.classList.add('show-modal');
		overlay.classList.remove('hidden');
}
const closeModal = function () {
	modal.classList.remove('show-modal');
	modal.classList.add('close-modal');
	overlay.classList.add('hidden');
}
for (let i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', showModal)
};



document.querySelector('.modalClose').addEventListener('click', closeModal);



document.querySelector('.overlay').addEventListener('click', closeModal);

document.addEventListener('keydown',function(e) {
	if(e.key === 'Escape' && modal.classList.contains('show-modal'))
	{
		closeModal();
	}
});
