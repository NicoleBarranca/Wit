// window.alert('This is an alert! Click "OK" if you have a sense of humor!');
// window.alert("Thank God!");

//MODAL

//get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


//Listen for open  click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);
// funtion to open modal
function openModal(){
    modal.style.display = 'block';
}

// function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// function to close modal if outside it clicked
function clickOutside(event){
 if (event.target === modal){
    modal.style.display = 'none';
 }
}