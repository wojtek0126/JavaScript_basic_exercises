// Napiszcie program, który w zmiennej array utworzy
// tablicę wielowymiarową zgodnie z wartościami w zmiennych rows i cols.
// Elementami tablicy mają być kolejne liczby całkowite zaczynając od jedynki.

let array = [];
const cols = 4;
const rows = 5;
let counter = 1;
for(i = 0;i < cols; i++) {
    array.push([]);
    for(j =0; j <= rows -1; j++){
        array[i].push(counter);
        counter++;
    }
}

console.log(array);
console.log((array[1].length));

