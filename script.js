const grid = document.createElement("div");
document.body.appendChild(grid);

for (let rowNumber = 0; rowNumber < 16; rowNumber++) {
    const row = document.createElement("div");
    grid.appendChild(row)
    row.style.display = "flex";

    for (let index = 0; index < 16; index++) {
        const cell = document.createElement("div");
        row.appendChild(cell);
        cell.innerHTML = index;
        cell.style.border = "groove";
    }
}
