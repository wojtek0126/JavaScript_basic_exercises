
function createArray(rows) {
    array = [];
    let counter = 1;
    for (i = 0; i < rows; i++) {
        array.push([]);
        for (j = 0; j < rows;j++) {
            array[i].push(counter);
            counter++;
        }


        return array;
    }
}

createArray(5);
console.log(array); //WIP