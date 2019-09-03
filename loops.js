//for loop function 

function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

// while loop function 
function whileLoop(number){
  let countdown=number;
  while (countdown > 0){
    console.log(--countdown);
  }
  return "done"
}

function incrementVariable(i) {
  return i + 1;
}

function doWhileLoop(i){
do { console.log("I run once regardless.")
}
function incrementVariable(i) {
  return i + 1;
}
while (incrementVariable()<i){
  return console.log("I run once regardless.")
}
}



  



