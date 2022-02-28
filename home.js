let myHeading = document.querySelector('h1');

function newUser(){
    let myName = prompt('My name is ...');
    if (!myName) {
        newUser();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = myName + 'Your taste, we have it!';
    }
}
if(!localStorage.getItem('name')) {
    newUser();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = storedName + 'Your taste, we have it!';
  }