

class Calculator {
    constructor(data) {
        
    }

}
export { Calculator };



















































/*class Calculator {
    
     constructor(num1, num2, operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
        
       
    }

     plus() {
        return this.num1 + this.num2;
    }

    minus() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    
    divide() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
            return "Error! Division by zero.";
        }
    }

   
    result() {
        let res;
        switch (this.operation) {
            case 'add':
                res = this.plus();
                break;
            case 'sub':
                res = this.minus();
                break;
            case 'mul':
                res = this.multiply();
                break;
            case 'div':
                res = this.divide();
                break;
            default:
                res = '0';
        }
        return res;
    }
}


function calculate(e) {
    
    let inputField = document.getElementById('digit');
    inputField.value += digit;
    let num1 = parseInt(document.getElementById('digit').value);
    let num2 = parseInt(document.getElementById('digit').value);
    let operation = document.getElementById('result').value;
    
    let cal = new Calculator(num1, num2, operation);
    
   
    document.getElementById('result').textContent = cal.result();
}



export { Calculator, calculate};*/