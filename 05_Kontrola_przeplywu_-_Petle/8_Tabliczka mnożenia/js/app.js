
// Piszcie kod pod tym komentarzem.
// Tabliczka mnożenia
// Napiszcie program tworzący tabliczkę mnożenia dla podanej zmiennej n.
//     Wyniki zwróćcie w tablicy dwu wymiarowej (w zmiennej calc). Wartości w tej tablicy mają być tekstami obliczeń.
//     Na przykład dla n = 3 wynik będzie następujący:

//n to bedzie liczba, i to mnoznik, zrobie petle
//
const n = 3;
const calc = [];
let m = 1;
for (i = 0; i<= n - 1;i++) {
        calc.push([]);
        let j = 1;
        while(j != n + 1){
            calc[i].push(m + " * "+ (n - (n -1)) + " =  " + m * (n - (n -1)));
            j++;
            m++;
//wip
        // for (j = 0; j <= n - 1; j++) {
        //     // let result = toString(n * m);
        //     calc[i].push(n * m);
        //     m++;
        }
        // let temp = (n * i).toString();

}
console.log(calc);
    // digit = n.toString();
    // multiplier = i.toString();
    // result = calc[x].toString();
    // console.log(calc[x]);
    // console.log(digit + " * " + multiplier + " = " + result);
// console.log(calc)
// }
// for (j = 0; j <= n; j++){
//     console.log(calc[j]);
// }






