const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
  kurdish: "Silav"
};

/*
Write a 'greet' function that takes a parameter 'language' (always a string), 
and returns the greeting for that language - if it exists in your "languages" object.

It should default to English if the language is not in your object of languages, 
or in the event of an invalid input.
*/


function greet(language) {
  const lan = language.toLowerCase();
  if (languages[lan]) {
    return languages[lan];
  } else {
    return "No language available";
  }
}
console.log(greet("KuRdisH"));
/*
Test your function works correctly calling it inside a console.log(), for each one of these cases:

1. pass it a valid lowercase language

For example: console.log(greet("irish"));

2. pass it a valid uppercase language
3. pass it a language that doesn't exist in the object
4. pass it an invalid string (something that is not even a language)

*/



 /*
function greet(language) {
  
const key = language.toLowerCase();

  if (Object.keys(languages).includes(key))
  {
    return languages[key];}
    else{
    return "please make sure you entered the correct language.";
    }
  }

console.log(greet("arabic"));
*/