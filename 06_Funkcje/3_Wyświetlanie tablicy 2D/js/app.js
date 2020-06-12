
const users = [
  ["Jan", "Nowak"],
  ["Zosia","Kowalska"]
];

function printArray2D(array2D) {
    for(i = 0; i < array2D.length;i++){
        for(j = 0; j < array2D[i].length;j++){
            console.log(array2D[i][j]);
        }
    }
}

printArray2D(users);