/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/

document.querySelectorAll("P");
document.querySelector(".site-header");
document.querySelector("#jumbotron-text");
document.querySelectorAll(".primary-content  p");


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click",alertThanks );

function alertThanks(){
    alert("Thank for visiting Bikes for Refugee!")
}


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let changeBckColor = document.querySelector("#bgrChangeBtn");
changeBckColor.addEventListener("click",bkColor);

function bkColor (){

document.body.style.backgroundColor="pink";

}


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addText = document.querySelector("#addTextBtn");

addText.addEventListener("click",newTextForm);

function newTextForm(){
    

    let newText = document.createElement("p");
        newText.innerText = "Read more below.";
    let paraText = document.querySelector(".buttons");
        paraText.appendChild(newText);

 }


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largeText = document.querySelector("#largerLinksBtn");
    largeText.addEventListener("click", increaseTheText);

function increaseTheText(){

    let links = document.querySelectorAll("a"); 

    links.forEach(largeFont => largeFont.style.fontSize = "20px");

}


/*
Task 6
======

Using JavaScript, create an unordered list under the "Add" button.
When the "Add" button is pressed, get the value of the text box on its left, and add it to the list you created above.
*/

let newList = document.querySelector("#addArticleBtn");
    newList.addEventListener("click", theNewList);

function theNewList(){

    let unorderedList = document.createElement("ul");
    let myInput= document.querySelector(".addArticle");
    let myValue = myInput.value;
        unorderedList.innerText = myValue;
    let list = document.querySelector("#LargeText");
        list.appendChild(unorderedList);
    
}

/*
1. create ul
2. Append ul as a child to parent div, maybe add id to it

3.on click, create li element, add text to li element, append li element as a child to your ul


<ul> 
    <li> </li>
</ul>


4. Grab value from input field
https://www.w3schools.com/tags/ev_onchange.asp

this link will help

https://github.com/CodeYourFuture/js-exercises/blob/master/week-5/InClass/A-dom-manipulation/exercise.js

*/