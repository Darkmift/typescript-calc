class Calculator {
 input1: number;
 input2: number;
 result: number;
 constructor(num1: number, num2: number) {
  this.input1 = num1;
  this.input2 = num2;
 }
 add() {
  this.result = this.input1 + this.input2;
 }
 subtract() {
  this.result = this.input1 - this.input2;
 }
 divide() {
  this.result = this.input1 / this.input2;
 }
 multiply() {
  this.result = this.input1 * this.input2;
 }
 powerTo() {
  this.result = Math.pow(this.input1, this.input2);
 }
 squareRoot() {
  this.result = Math.sqrt(this.input1);
 }
 output() {
  return this.result;
 }
}