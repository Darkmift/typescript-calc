var inputArr = document.querySelectorAll('input[type=number]');
var buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        var n1 = Number((inputArr[0]).value);
        var n2 = Number((inputArr[1]).value);
        let calculation = new Calculator(n1, n2);
        //console.log(btn.value);
        switch (btn.value) {
            case 'add':
                calculation.add();
                break;
            case 'subtract':
                calculation.subtract();
                break;
            case 'multiply':
                calculation.multiply();
                break;
            case 'divide':
                calculation.divide();
                break;
            case 'powerTo':
                calculation.powerTo();
                break;
            case 'squareRoot':
                calculation.squareRoot();
                break;
        }
        var result = calculation.output();
        inputArr[2].placeholder = result.toString();
    });
});
