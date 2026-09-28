function resetGrid(resolution) {
    for (let rowNumber = 0; rowNumber < resolution; rowNumber++) {
        const row = document.createElement("div");
        grid.appendChild(row)
        row.classList.add('row')

        for (let index = 0; index < resolution; index++) {
            const cell = document.createElement("div");
            row.appendChild(cell);
            cell.classList.add('cell')
            
            cell.addEventListener('mouseover', function(){
                cell.style.background = "blue";
            });
        }
    }
}

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = 'Resolution';
button.addEventListener('click', function() {
    const requestedResolution = prompt("Enter requested resolution");
    if (requestedResolution <= 100) {
        document.querySelector(".grid").remove();
        grid = document.createElement("div");
        document.body.appendChild(grid);
        grid.classList.add('grid');
        resetGrid(requestedResolution);
    } else {
        alert("Try below 101");
    }
});

let grid = document.createElement("div");
document.body.appendChild(grid);
grid.classList.add('grid');
resetGrid(16);