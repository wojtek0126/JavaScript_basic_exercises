// wersja pierwsza
const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];
function maxFromArray(numbers) {
   let top = 0;
    for (i = 0; i < numbers.length;i++){
        if (numbers[i] > top) {
            top = numbers[i];
        }
    }
    return top;
}
// wersja druga,
const temp = [333, 666, 999, 3333];
function maxFromArrayShort(numbers2) {
    return Math.max(...numbers2);   //bez tych trzech kropek Math.max nie zadziala na zbiorze
}

console.log(maxFromArray(randomNumbers));
console.log(maxFromArrayShort(temp));
