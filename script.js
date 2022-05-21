//get container div
const grid = document.querySelector('.grid');
let dimSize;
let squareSize;
let squares;

const getCanvasDim = () => {
    do {
        dimSize = prompt('Enter canvas dimensions(square canvas) ex: 16 --> 16x16');
        squareSize = (480/dimSize);
    }  while(dimSize > 100);
    
}


const createCanvas = () => {
    
    getCanvasDim();
    //create div(grid squares)
    for(let i = 0; i < dimSize; i++) {
        for(let j = 0; j < dimSize; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridSquare.setAttribute('style', `display:flex; background-color:white; width: ${squareSize}px; height:${squareSize}px; border: #D3D3D3 1px solid;`);
            // gridSquare.innerText = `gridSquare ${i+1} `; 

            //add to grid
            grid.appendChild(gridSquare);
        };
    };

    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mousemove', (e) => {
            if(e.buttons == 1 || e.buttons == 3){
                square.style.setProperty('background-color', 'black');
            }
        });

});
};
const deleteCanvas = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        grid.removeChild(square);
    })
}

const resetCanvas = () => {
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.setProperty('background-color', 'white');   
        });
}
createCanvas();


/////////////////////////   EVENT LISTENERS   ////////////////////// 

const resizeCanvasButton = document.querySelector('.resizeBtn'); 
resizeCanvasButton.addEventListener('click', () => {
    deleteCanvas();
    createCanvas();
})

const resetCanvasButton = document.querySelector('.resetBtn');
resetCanvasButton.addEventListener('click', () => {
    resetCanvas();
})

