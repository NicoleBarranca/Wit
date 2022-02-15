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

var jokeOfDay = document.querySelector("#jokes") ;
var jokeResults = jokeOfDay.value;

function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     alert(this.responseText);
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod/categories", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "https://api.jokes.one/jod/categories");
    xhttp.send();
}

get_joke_of_the_day()