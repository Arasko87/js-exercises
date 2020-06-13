
/*

When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
*/


let blueButton1 = document.querySelector("#blueBtn");
blueButton1.addEventListener("click", JumbotronBckGrColor);

function JumbotronBckGrColor (){

    let btnColor = document.querySelector(".jumbotron"); 
        btnColor.style.backgroundColor = "#588fbd";
    let donColor = document.querySelector(".btn-lrg"); 
        donColor.style.backgroundColor = "#ffa500";  
    let volBtn = document.querySelector(".btn-secondary"); 
        volBtn.style.backgroundColor = "black";
        volBtn.style.color = "white";
}



/*
2 Orange Button 

- When clicking **orange** it should change:

  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`

*/
let orangeButton1 = document.querySelector("#orangeBtn");
    orangeButton1.addEventListener("click", JumbotronBckGrColorOrange);

function JumbotronBckGrColorOrange (){

    let orangeBtnColor = document.querySelector(".jumbotron"); 
        orangeBtnColor.style.backgroundColor = "#f0ad4e";
    let orangeDonColor = document.querySelector(".btn-lrg"); 
        orangeDonColor.style.backgroundColor = "#5751fd";
    let orangeVolBtn = document.querySelector(".btn-secondary"); 
        orangeVolBtn.style.backgroundColor = "31b0d5";
        orangeVolBtn.style.color = "white";
          
}


/*

- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`

*/

let greenButton1 = document.querySelector("#greenBtn");
greenButton1.addEventListener("click", JumbotronBckGrColorGreen);

function JumbotronBckGrColorGreen (){
    document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";    
    document.querySelector(".btn-lrg").style.backgroundColor = "black";   
    document.querySelector(".btn-secondary").style.backgroundColor = "#8c9c08";
}

/*

## Part 2

let submitBtn = document.querySelector(".btn btn-primary");
submitBtn.addEventListener("click", checkingTheValid);
function checkingTheValid (){

}

*/