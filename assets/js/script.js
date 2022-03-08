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
function openModal() {
    modal.style.display = 'block';
}

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// function to close modal if outside it clicked
function clickOutside(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

var jokeOfDay = document.querySelector("#jokes");
var jokeResults = jokeOfDay.value;

function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Access the result here
            alert(this.responseText);
        }
// console.log(success.contents.categories[2])
//         // var div = document.createElement("div");
    
//         // // div.textContent = jokeResults;
//         // p.src = success.contents.categories[2]

//         // jokeOfDay.appendChild(div);

    };
    xhttp.open("GET", "https://api.jokes.one/jod/categories", true);
    xhttp.setRequestHeader("categories", "application/json");
    // xhttp.setRequestHeader("X-JokesOne-Api-Secret", "https://api.jokes.one/jod/categories");
    xhttp.send();
}



get_joke_of_the_day();

// {"success":{"total":4},"contents":{"categories":[{"name":"jod","description":"Joke of the day ","language":"
// en","background":""},{"name":"animal","description":"Animal Joke of the day ","language":"en","background":""},{"name":"blonde","description":"Blonde joke of the day!","language":"en","background":""},{"name":"knock-knock","description":"Knock Knock joke of the day!","language":"en","background":""}],"copyright":"2019-20 https:\/\/jokes.one"}}

