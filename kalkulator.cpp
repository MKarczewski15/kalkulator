#include <iostream>
#include <cmath>

using namespace std;
class Kalkulator {
public:
    static double wynik(double a, double b, char c) {
        if (c == '+') {
            return a + b;
        } else if (c == '-') {
            return a - b;
        } else if (c == '*') {
            return a * b;
        } else if (c == '/') {
            if (b != 0) {
                return a / b;
            } else {
                throw invalid_argument("Nie można dzielić przez zero!");
            }
        } else {
            throw invalid_argument("Niepoprawny znak");
        }
    }
};

int main(){
    cout<<Kalkulator::wynik(10, 5, '*')<<endl;
}