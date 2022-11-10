// Створити калькулятор використовуючи функцію.Резельтати обчислень вивести в консоль.Складання, віднімання, множення та ділення. Для ділення зробити перевірку ділення на нуль. Якщо буде помилка вивести відповідне повідомлення.

function plus(num1,num2){
    console.log(num1+num2)
}
plus(7, 3);

function minus(num1,num2){
    console.log(num1-num2)
}
minus(4, 3);
minus(1, 3);

function multuply(num1,num2){
    console.log(num1*num2)
}
multuply(3, 2);

function divide(num1,num2) {
    if (num2 > 0) {
        console.log(num1/num2) 
    } else {
        console.log("Error")
    }
}
divide(5, 2);
divide(5, 0);