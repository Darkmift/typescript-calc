var inputArr: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type=number]');
var buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach(btn => {
 btn.addEventListener('click', function (e: MouseEvent) {
  var n1: number = Number((inputArr[0]).value);
  var n2: number = Number((inputArr[1]).value);
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
  var result: number = calculation.output();

  inputArr[2].placeholder = result.toString();
 });
});