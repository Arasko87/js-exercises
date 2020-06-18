const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

// 1. Console.log() the name of the first and second god in the list
console.log(greekGods[1]);


// 2. Console.log() the name of the first god after 3 seconds, and the name of the second god after 1 second


setTimeout(function(){
  console.log(greekGods[0])
},3000);
setTimeout(function(){
  console.log(greekGods[1])
},1000)