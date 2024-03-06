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
    console.log({
        vpierwsza,
        vznak,
        vdruga
    })

    switch (vznak){
        case "sum":
            iwynik.value = kalkulator['sum'](vpierwsza, vdruga);
            break;
        case "subtract":
            iwynik.value = kalkulator['subtract'](vpierwsza, vdruga);
            break;
        case "multiplication":
            iwynik.value = kalkulator['multiplication'](vpierwsza, vdruga);
            break;
        case "divide":
            iwynik.value = kalkulator['divide'](vpierwsza,vdruga);
            break;
    }


    // if (vznak === "sum") {
    //     iwynik.value = kalkulator['sum'](vpierwsza, vdruga);
    // } else if (vznak === "subtract") {
    //     iwynik.value = kalkulator['subtract'](vpierwsza, vdruga);
    // } else if (vznak === "multiplication"){
    //     iwynik.value = kalkulator['multiplication'](vpierwsza, vdruga);
    // } else {
    //     iwynik.value = kalkulator['divide'](vpierwsza,vdruga);
    // }
   
    return false;
})

// przekrztalcić klase aby miała prywatnąmetode do przekrztałcania liczb a i b która będzie wykonywana w karzdej funkcji