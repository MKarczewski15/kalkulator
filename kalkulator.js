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

// class Kalkulator {

//     sum(a, b) {
//         return a + b;
//     }

//     subtract(a, b) {
//         return a - b;
//     }

//     multiplication(a, b) {
//         return a * b;
//     }

//     divide(a, b) {
//         if(b === 0) {
//             console.log("nie można dzielić przez 0");
//         } else {
//             return a / b;
//         }
       
//     }

//     static countSum(a, b) {
//         const kalkulator = new Kalkulator();
//         return kalkulator.sum(a, b);
//     }

//     static countSubtract(a, b) {
//         const kalkulator = new Kalkulator();
//         return kalkulator.subtract(a, b);
//     }

//     static countMultiplication(a ,b) {
//         const kalkulator = new Kalkulator();
//         return kalkulator.multiplication(a, b);
//     }

//     static countDivide(a, b) {
//         const kalkulator = new Kalkulator();
//         return kalkulator.divide(a, b);
//     }

// }

// console.log(Kalkulator.countSum(4, 5));
// console.log(Kalkulator.countSubtract(3, 6));
// console.log(Kalkulator.countMultiplication(3, 7));
// console.log(Kalkulator.countDivide(10, 2));
// //console.log(
//     const wynik = Kalkulator.countDivide(12, 0);

class Calculator {
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
        if (b === 0) {
            console.log("nie można dzielić przez 0");
            return null;
        } else {
            return a / b;
        }
    }
}

const kalkulator = new Calculator();

const ipierwsza = document.querySelector("#pierwsza");

const iznak = document.querySelector("#znak");

const idruga = document.querySelector("#druga");

const iwynik = document.querySelector("#wynik");

const ipolicz = document.querySelector("#policz");

ipolicz.addEventListener('click', function (e){
    e.preventDefault();
    const vpierwsza = parseFloat(ipierwsza.value);
    const vznak = iznak.value;
    const vdruga = parseFloat(idruga.value);
    const vwynik = iwynik.value;
    console.log({
        vpierwsza,
        vznak,
        vdruga
    })

    if (vznak === "sum") {
        iwynik.value = kalkulator['sum'](vpierwsza, vdruga);
    } else if (vznak === "subtract") {
        iwynik.value = kalkulator['subtract'](vpierwsza, vdruga);
    } else if (vznak === "multiplication"){
        iwynik.value = kalkulator['multiplication'](vpierwsza, vdruga);
    } else {
        iwynik.value = kalkulator['divide'](vpierwsza,vdruga);
    }
   
    return false;
})
