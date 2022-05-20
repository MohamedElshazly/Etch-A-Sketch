//get container div
const grid = document.querySelector('.grid');

//create div(grid squares)
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('square');
    gridSquare.setAttribute('style', 'width: 60; height:60;');
    // gridSquare.innerText = `gridSquare ${i+1} `; 
    
    //add to grid
    grid.appendChild(gridSquare);
}
}
