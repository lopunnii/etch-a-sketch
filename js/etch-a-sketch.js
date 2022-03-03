createGrid(16);
function createGrid (size) {
    document.querySelector('.grid-container').innerHTML = '';
    for(i=0; i < size; i++) {
        let gridContainer = document.querySelector('.grid-container');
        let row = document.createElement('div');
        row.className = 'row'; 
        gridContainer.appendChild(row);
        for (f=0; f < size; f++) {
            let square = document.createElement('div');
            square.className = 'square';
            row.appendChild(square);
        };
};
    hover();
};



function hover () {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

function newGrid () {
    let button = document.querySelector('.new-grid');
    button.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
});
}; 

newGrid();

function gridSize () {
    let button = document.querySelector('.grid-size');
    button.addEventListener('click', () => {
        let size = prompt('How many squares per side? (1-100)', '16');
        if (size < 1) {
            size = 16;
        } else if (size > 100) {
            size = 100;
        };
        createGrid(size);
    });
}

gridSize();

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  

function rainbowPen () {
    let button = document.querySelector('.rainbow');
    button.addEventListener('click', () => {
        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = randomColor();
            });
        });        
    });
}

rainbowPen();
