const grid = document.createElement("div");
document.body.appendChild(grid);
grid.classList.add('grid');

for (let rowNumber = 0; rowNumber < 16; rowNumber++) {
    const row = document.createElement("div");
    grid.appendChild(row)
    row.classList.add('row')

    for (let index = 0; index < 16; index++) {
        const cell = document.createElement("div");
        row.appendChild(cell);
        cell.classList.add('cell')
        
        cell.addEventListener('mouseover', function(){
            cell.style.background = "blue";
        });
    }
}
