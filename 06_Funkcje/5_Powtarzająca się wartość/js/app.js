
const numbers = [9, 7, 12, 11, 3, 5, 4, 2, 8, 9];

function indexOfRepeatedValue(array) {
    let text1 = "Powtarzająca się jako pierwsza w tym zbiorze jest liczba ";
    let text2 = " ,a jej indeks w tablicy to: ";
    let text3 = "Brak powtarzających się liczb w tym zbiorze";
    for (i = 0; i < array.length;i++){
        firstIndex = 0;
        if (array.indexOf(array[i]) != array.lastIndexOf(array[i])) {
            firstIndex = array.indexOf(array[i]);
            break
        }
        else {
            firstIndex = text3
        }
    }
    return  text1 + array[firstIndex] + text2 + firstIndex;
}

console.log(indexOfRepeatedValue(numbers));