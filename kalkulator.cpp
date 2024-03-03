#include <iostream>
#include <cmath>

using namespace std;

double kalkulator(double a, double b, char c){
    if (c == '+'){
        return a + b;
    } else if (c == '-'){
        return a - b;
    } else if (c == '*'){
        return a * b;
    } else if (c == '/'){
        return a / b;
    } else{
        cout<<"niepoprawny znak"<<endl;
    }
    return 0;
}

int main(){
    cout << kalkulator(10, 5, '*') << endl;
}