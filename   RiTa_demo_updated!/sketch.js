// based of Daniel Shiffman's code from
// https://github.com/CodingTrain/website/blob/main/Courses/programming_with_text/session03/3-01_rita_js/sketch.js

let input;
let button;

let lexicon;

function setup() {
  noCanvas();
  input = createInput('Enter text here');
  input.changed(goRita);
  
  button = createButton('click me');
  button.size(100,100);
  button.position(850,80);
  button.mouseClicked(goRita);
  input.size(600);
}

function draw() {
  // put drawing code here
}

function goRita(){
  let s = input.value();
  let words = RiTa.tokenize(s); // Tokenizes a string (into words) according to the Penn Treebank conventions.
  let pos = RiTa.pos(s);  // Uses the default PosTagger to tag the input with tags from the Penn tag set or the simplified tag set [a, r, v, n]


  console.log(words);
  console.log(pos);

  let output = '';

 for(let i = 0; i < words.length; i++){

    if(pos[i] === 'nn'){
     output += RiTa.randomWord(pos[i]);
    } else {
      output += words[i];
     
    }
     output += ' ' ;
     
  }
  createP(output); // creates a HTML paragraph tag
  
}



