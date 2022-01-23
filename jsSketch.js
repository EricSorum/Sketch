// SO THE CLICK FUNCTION WORKS, BUT ONLY FOR THE FIRST SQUARE.  I CLICK ANYWHERE
// BUT ONLY THE FIRST SQUARE CHANGES

// maybe try putting clickFunction in the for loop that adds the eventlistners?

const grid = document.querySelector('#grid');
console.log(grid);

for (i = 0; i < 256; i++) {
    let square = document.createElement('div');
    grid.appendChild(square);
    square.classList.add('square');
    square.setAttribute('id', 'squareID')
    square.addEventListener('click', function() {
        this.classList.toggle('square2');
    })
}



/*


const allSquares = document.querySelectorAll('#squareId');
const squaresArr = Array.from(allSquares);
for (i = 0; i < squaresArr.length; i++) {    
    console.log(this);
    this.setAttribute('id', 'squareId');
    this.classList.add('square');
}

document.getElementById("squareId").addEventListener("click", function() {
    this.classList.toggle('square2');
  }); 




console.log(squaresArr);
console.log(document.getElementById("squareId"));

function clickFunction(e) {
    console.log(e);
    console.log("clickFunction")
    let square = e.target.id;
    console.log(e.target.id)
    squareId.classList.toggle('square2');
};

const allSquares = document.querySelectorAll('#squareId');
const squaresArr = Array.from(allSquares);
console.log(squaresArr);

for (i = 0; i < squaresArr.length; i++) {
    squaresArr[i].addEventListener('click', clickFunction)
}

document.getElementById("myBtn").addEventListener("click", function() {
    this.style.backgroundColor = "red";
  }); 
*/

// so square3 is a JS variable introduced below, but it will only ever work on 
// that one square.  maybe if i use a for loop to create all the squares, they'll
// all have the same name

// could use inline-block to create a grid instead of recursive loop


// so make a loop within a loop. the first loop makes a column, and the second
// makes rows
// OORRRR there must be some way to just have it all in one loop, like flex-wrap



//squaresArr.forEach(element => square.addEventListener('click', clickFunction()));







/*
const container = document.querySelector('#');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
*/
