class Kalkulator {
    static wynik(a, b, c) {
        if (c === '+') {
            return a + b;
        } else if (c === '-') {
            return a - b;
        } else if (c === '*') {
            return a * b;
        } else if (c === '/') {
            if (b === 0) {
                console.log("Nie można dzielić przez zero");
            } else {
                return a / b;
            }
        } else {
            console.log("Niepoprawny znak");
        }
    }

    static oblicz(a, b, c) {
        return this.wynik(a, b, c);
    }
}

console.log(Kalkulator.oblicz(231, 0, '/'));
