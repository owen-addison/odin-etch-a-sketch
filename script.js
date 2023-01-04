const maxHeight = 960;
const maxWidth = 960;
let selection = 16;
let opacity = 0;
// let numCells = 16;

// Get body element of DOM
const body = document.querySelector('body');

function resetGrid(numCells) {
    
    // Select existing container in DOM
    const container = document.querySelector('#container');

    // Select all existing cells in DOM
    const cells = document.querySelectorAll('.cell');

    // For each cell, remove it from container
    cells.forEach((cell) => {
        container.removeChild(cell);
    });

    // Remove container element from body
    body.removeChild(container);

    createGrid(numCells);
};

function createGrid(numCells) {
    // Set the number of columns
    const cols = numCells;

    // Create "container" as a div element and add corresponding class
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    // Set the container style properties
    container.style.display = 'grid';
    container.style.height = `${maxHeight}px`;
    container.style.width = `${maxWidth}px`;
    container.style['grid-template-columns'] = `repeat(${cols}, 1fr)`;
    container.style.gap = '0px';

    // Append container to body in DOM
    body.appendChild(container);
    
    // For loop to create 16 div elements
    for ( i = 0; i < numCells; i++ ) {
        for ( j = 0; j < numCells; j++) {
            // create "cell" as a div element and add corresponding class
            const cell = document.createElement('div');
            cell.classList.add('cell');
        
            // Append cell to container in DOM
            container.appendChild(cell);
        }
    }

    const cells = document.querySelectorAll('.cell');
    
    // Add a 'mouseover' event listener for each cell
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            const { r, g, b } = createRandomRGB();
            const currentOpacity = Number(cell.style.opacity);
            cell.style['background-color'] = `rgb( 72, 61, 139)`
            cell.style.opacity = currentOpacity + 0.1;
        });
    });
};

function createRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b };
};

createGrid(selection);

const btn = document.querySelector('#btn');
btn.addEventListener('click', reset);

function reset() {
    const numCells = Math.min(prompt('How many cells? (Max: 50)', selection), 50);
    selection = numCells;

    resetGrid(numCells);
};