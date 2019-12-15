<h1>Контекст в JavaScript.</h1>
Задание 1
<p>Задание, которое делалось при ознакомлении с функциями :
Создать калькулятор, который может выполнять операции сложения, вычитания, деления и умножения.
Calculator.add();
Calculator.subtract();
Calculator.divide();
Calculator.multiply();
Также калькулятор должен обладать следующими возможностями:
сохранять текущее состояние - результат предыдущей операции. Начальное значение равно 0.
иметь метод для получения текущего состояния:
console.log(Calculator.getResult()); // 0
иметь метод для сброса текущего состояния:
console.log(Calculator.reset()); // 0
все операции производятся над текущим состоянием:
Calculator.add(4);
Calculator.subtract(1);

console.log(Calculator.getResult()); // 3
выполнять арифметические операции также можно следующим образом:
console.log(Calculator.getResult()); // 0

Calculator.add(4)(1);

console.log(Calculator.getResult()); // 5

Calculator.subtract(1)(1)(1)(2);

console.log(Calculator.getResult()); // 0
все арифметические операции должны корректно работать в случае вызова метода без аргументов:
console.log(Calculator.getResult()); // 0

Calculator.add()();

console.log(Calculator.getResult()); // 0

Calculator.subtract()()()();

## console.log(Calculator.getResult()); // 0

Доработка задания по функциям :
выполнять арифметические операции также можно следующим образом:
const result = Calculator.add(100)
.multiply(2)
.divide(20)
.reset()
.subtract(1)
.getResult();

console.log(result); // -1
у калькулятора должен быть метод для установки текущего состояния калькулятора
console.log(Calculator.getResult()); // 0

Calculator.setState(1);

console.log(Calculator.getResult()); // 1
у калькулятора должен быть метод, эмулирующий запрос к серверу и устанавливающий состояние калькулятора, равное 500, при получении ответа с помощью переданного коллбека.
console.log(Calculator.getResult()); // 0

Calculator.fetchData(/\*_ callback _/);

// -- завершение асинхронной операции --

console.log(Calculator.getResult()); // 500</p>

<h2>Задание 2</h2>
<p>
Создать игру виселица. Виселица — простая игра, в которой загадывается слово, а игрок пытается его угадать, называя по одной букве за раз. Если игрок назвал неправильную букву, то ему начисляется одна ошибка. Если буква была названа правильно, то эта буква показывается в слове. Игра продолжается до тех пор, пока игрок не угадает слово или не совершит 6 ошибок.
Создайте функцию конструктор Hangman, которая принимает один аргумент - слово, которое необходимо отгадать. Регистр букв не учитывается.
var hangman = new Hangman('webpurple');
Реализуйте метод guess, который принимает букву, которую игрок пытается угадать. Если игрок угадал, то необходимо вывести строку с угаданными буквами, неизвестные буквы должны быть заменены символами \_. Если игрок не угадал, то необходимо вывести количество оставшихся ошибок и введённые им неправильные буквы через разделитель |.
hangman.guess('w'); // "w**\_\_\_\_**"
hangman.guess('e'); // "we**\_\_**e"
hangman.guess('a'); // "wrong letter, errors left 5 | a"
hangman.guess('p'); // "we_p**p_e"
hangman.guess('k'); // "wrong letter, errors left 4 | a,k"
Реализуйте метод getGuessedString, который возвращает строку с угаданными буквами:
hangman.getGuessedString(); // we_p**p_e
Реализуйте метод getErrorsLeft, который возвращает количество оставшихся ошибок:
hangman.getErrorsLeft(); // 4
Реализуйте метод getWrongSymbols, который возвращает массив с неправильно угаданными символами:
hangman.getWrongSymbols(); // ["a","k"]
Реализуйте метод getStatus, который возвращает строку с угаданными буквами и количество оставшихся ошибок:
hangman.getStatus(); // "we_p**p*e | errors left 4"
Пользователь должен иметь возможность производить подобные действия:
hangman.guess('b') // "webp***p_e"
.guess('l') // "webp**ple"
.guess('u') // "webpu_ple"
.guess('r'); // "webpurple | You won!"
Реализуйте метод startAgain, который принимает в качестве аргумента новое слово и сбрасывает все значения свойств к исходным.
hangman.startAgain('webpurple')
.guess('w') // "w**\_\_****"
.getStatus(); // "w**\_\_\_** | errors left 6"
</p>
