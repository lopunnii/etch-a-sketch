function createSquareDiv () {
    for(i=0; i<256; i++) {
    let gridContainer = document.querySelector('.grid-container');
    let square = document.createElement('div');
    square.className = 'square';
    gridContainer.appendChild(square);
    }
}

createSquareDiv();

function hover () {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

hover();

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

