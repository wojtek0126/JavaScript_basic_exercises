
const n = 3;
const calc = [];

for (i = 0; i < n; i++) {
    calc.push([]);   //to n razy zrobi pusty zbior w zbiorze calc
    for (j = 0; j < n; j++) { // to w kazdy zbior z petli powyzej wpakuje to co jest ponizej n razy
     let result = ((i + 1) + " * " + (j + 1) + " = " + (i + 1) * (j + 1)); //wynik i + 1 i j + 1 zeby nie zaczynalo od 0
     let stringedRes = result.toString() //wynik przerabiam na stringa
     calc[i].push(stringedRes); //  przestringowany wynik wrzucam do podzbioru
    }
}
for (i = 0; i < n;i++) {
    console.log(calc[i]);
}

console.log(calc.);
console.table(calc);  //wyswietli wynik w konsoli w formie tabeli






