const snakeArray = (counter) => {
    const n = 6;
    const m = 7;
    let matrixResults = [];

    for (let i = 0; i < n; i++) {
        matrixResults.push([])
    }

    let startColumn = 0;
    let endColumn = m - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startRow <= endRow && startColumn <= endColumn) {

        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            matrixResults[startRow][i] = counter;
            counter++
        }
        startRow++;

        // right side column
        for (let i = startRow; i <= endRow; i++) {
            matrixResults[i][endColumn] = counter;
            counter++
        }
        endColumn--;

        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            matrixResults[endRow][i] = counter;
            counter++
        }
        endRow--;

        // left side column
        for (let i = endRow; i >= startRow; i--) {
            matrixResults[i][startColumn] = counter;
            counter++
        }
        startColumn++

    }

    return matrixResults
};

console.log(snakeArray(-10))
