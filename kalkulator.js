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

    sum(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    divide(a, b) {
        if(b === 0) {
            console.log("nie można dzielić przez 0");
        } else {
            return a / b;
        }
    }

    static countSum(a, b) {
        const kalkulator = new Kalkulator();
        return kalkulator.sum(a, b);
    }

    static countSubtract(a, b) {
        const kalkulator = new Kalkulator();
        return kalkulator.subtract(a, b);
    }

    static countMultiplication(a ,b) {
        const kalkulator = new Kalkulator();
        return kalkulator.multiplication(a, b);
    }

    static countDivide(a, b) {
        const kalkulator = new Kalkulator();
        return kalkulator.divide(a, b);
    }

}

console.log(Kalkulator.countSum(4, 5));
console.log(Kalkulator.countSubtract(3, 6));
console.log(Kalkulator.countMultiplication(3, 7));
console.log(Kalkulator.countDivide(10, 2));
console.log(Kalkulator.countDivide(12, 0));