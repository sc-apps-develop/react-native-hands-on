// NOTE: TypeScript単体の実行環境がないため、VSCode上では実行できない

const number1: number = 3; // 数値型の変数1
const number2: number = 5; // 数値型の変数2

// 数値を2つ受け取り、2つの数値の和を文字列として返却する関数
const addNumbers = (num1: number, num2: number): string => {
  return (num1 + num2).toString();
}
console.log(addNumbers(number1, number2));