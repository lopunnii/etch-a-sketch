function createSquareDiv () {
    for(i=0; i<256; i++) {
    const gridContainer = document.querySelector('.grid-container');
    const square = document.createElement('div');
    square.className = "square"; 
    gridContainer.appendChild(square);
    }
}

createSquareDiv();


