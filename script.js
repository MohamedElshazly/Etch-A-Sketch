//get container div
const grid = document.querySelector('.grid');
let dimSize;
let squareSize;
let squares;

const getCanvasDim = () => {
    do {
        dimSize = prompt('Enter canvas dimensions(square canvas) ex: 16 --> 16x16');
        squareSize = (480/dimSize);
    }  while(dimSize > 100 || dimSize == null);
    
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
    const drawButton = document.querySelector('.drawBtn');
    const eraseButton = document.querySelector('.eraseBtn');

    //drawing 
    drawButton.addEventListener('click', () => {
        //make draw button active and erase button not active
        drawButton.classList.remove('btn');
        drawButton.classList.add('activeBtn');
        
        eraseButton.classList.remove('activeBtn');
        eraseButton.classList.add('btn');
        
        squares.forEach((square) => {  
            square.addEventListener('mousemove', (e) => {
                if(e.buttons == 1 || e.buttons == 3){
                    square.style.setProperty('background-color', 'black');
                }
            });
        });        
    })

    //erasing
    eraseButton.addEventListener('click', () => {
        //The opposite
        eraseButton.classList.remove('btn');
        eraseButton.classList.add('activeBtn');

        drawButton.classList.remove('activeBtn');
        drawButton.classList.add('btn');
        
        squares.forEach((square) => {  
            square.addEventListener('mousemove', (e) => {
                if(e.buttons == 1 || e.buttons == 3){
                    square.style.setProperty('background-color', 'white');
                }
            });
        });        
    })
    
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
    const drawButton = document.querySelector('.drawBtn');
    const eraseButton = document.querySelector('.eraseBtn');

    drawButton.classList.remove('activeBtn');
    drawButton.classList.add('btn');

    eraseButton.classList.remove('activeBtn');
    eraseButton.classList.add('btn');



})

const resetCanvasButton = document.querySelector('.resetBtn');
resetCanvasButton.addEventListener('click', () => {
    resetCanvas();
})

