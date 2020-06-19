console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

  let sectionColors = document.querySelectorAll("section");

    sectionColors.forEach(newBackColor);

    function newBackColor (newColor){
        newColor.style.backgroundColor = "white";
    }
 
// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let image = document.querySelectorAll("img");

image.forEach(centerImg);

function centerImg(photo){

    photo.className = "content-title";
}

// Task 3

// Google the date of birth and death of each of the people on the page. 
//Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.



let para = document.querySelector("#grace-hopper");

let newParent = para.parentNode;
let paragraph = document.createElement("p");
    paragraph.innerText = "Born: December 9, 1906 , Died: January 1, 1992 ";
    newParent.appendChild(paragraph);


    let para2 = document.querySelector("#katherine-johnson");

let newParent2 = para2.parentNode;
let paragraph2 = document.createElement("p");
    paragraph2.innerText = "Born: 26 August 1918, Died: 24 February 2020, ";
    newParent2.appendChild(paragraph2);


    let para3 = document.querySelector("#ada-lovelace");

let newParent3 = para3.parentNode;
let paragraph3 = document.createElement("p");
    paragraph3.innerText = "Born 10 December 1815,  Died	27 November 1852 ";
    newParent3.appendChild(paragraph3);
