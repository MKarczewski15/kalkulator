// class Kalkulator {
//     static wynik(a, b, c) {
//         if (c === '+') {
//             return a + b;
//         } else if (c === '-') {
//             return a - b;
//         } else if (c === '*') {
//             return a * b;
//         } else if (c === '/') {
//             if (b === 0) {
//                 console.log("Nie można dzielić przez zero");
//             } else {
//                 return a / b;
//             }
//         } else {
//             console.log("Niepoprawny znak");
//         }
//     }

//     static oblicz(a, b, c) {
//         return this.wynik(a, b, c);
//     }
// }

// console.log(Kalkulator.oblicz(231, 0, '/'));

class Kalkulator{

    dodaj(a, b) {
        return a + b;

    }

    odejmij(a, b){
        return a - b;
    }

    pomnóż(a, b){
        return a * b;
    }

    podziel(a, b){
        if(b === 0) {
            console.log("nie można dzielić przez 0");
        } else {
            return a / b;
        }
    }

}

const kalkulator = new Kalkulator();

console.log(kalkulator.dodaj(4, 5));
console.log(kalkulator.odejmij(3, 6));
console.log(kalkulator.pomnóż(3, 7));
console.log(kalkulator.podziel(10, 2))
console.log(kalkulator.podziel(12, 0));