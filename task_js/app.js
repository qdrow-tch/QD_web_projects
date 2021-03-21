//Задание №1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 -- a равно 1, операция ++ позволяет прибавить к операнду единицу итого а+1 = 2, значит с = 2
d = b++; alert(d);           /* 1 -- операция ++ после операнда означает прибавление единицы после выполнения операции присваивания...поэтому сначала выполнится 
                                d = b(d = 1), а потом уже b станет равным двум....*/
c = (2+ ++a); alert(c);      // 5 -- а+1 = 3, далее 2 + 3 = 5
d = (2+ b++); alert(d);      // 4 -- сначала вернется b = 2, далее 2 + 2 = 4, и только после этого b станет равным трем
alert(a);                    // 3 -- над операндом а была выполнена операция с префиксом ++ дважды, значит (а + 1) + 1
alert(b);                    // 3 -- над операндом b была выполнена операция с постпрефиксом ++ дважды, значит (b + 1) + 1

//Задание №2

a = 2;  
var x = 1 + (a *= 2);       // 5 -- а равно двум, операция а *= 2 означает а = а * 2 = 4, так как до этой операции а было равно двум. ну и далее просто 4 + 1 равно 5

//Задание №3

a = prompt("Vvedite a");
b = prompt("Vvedite b");
if (a>=0 && b>=0){
    console.log(a - b);
}
else if(a<0 && b<0) {
    console.log(a * b);
}
else {
    console.log(Number(a) + Number(b));
}

//Задание №4

function summa(arg1, arg2){
    return arg1+arg2;
}

function difference(arg1, arg2){
    return arg1-arg2;
}
function divis(arg1, arg2){
    return arg1/arg2;
}
function multipli(arg1, arg2){
    return arg1*arg2;
}
console.log(summa(3,3));
console.log(difference(3,3));
console.log(divis(3,3));
console.log(multipli(3,3));

//Задание №5
function mathOperation (arg1, arg2, operation){
    switch (operation)
    {
        case "+":
            return summa(arg1,arg2);
            break;
        case "-":
            return difference(arg1,arg2);
            break;
        case "/":
            return divis(arg1,arg2);
            break;
        case "*":
            return multipli(arg1,arg2);
            break;
    }
}

console.log(mathOperation(4,3,"+"));
console.log(mathOperation(4,3,"-"));
console.log(mathOperation(4,3,"/"));
console.log(mathOperation(4,3,"*"));

//Задание №6
function Get_message(summa){
    let numeral = Number(String(summa)[String(summa).length - 1]);
    if (numeral == 1){
        alert(`Ваша сумма в ${summa} рубль зачислена`);
    }
    else if(numeral > 1 && numeral < 5){
        alert(`Ваша сумма в ${summa} рубля зачислена`);
    }
    else {
        alert(`Ваша сумма в ${summa} рублей зачислена`);
    }
}
Get_message(5435541);
Get_message(5435542);
Get_message(5435543);
Get_message(5435544);
Get_message(5435545);
Get_message(5435546);
Get_message(5435547);
Get_message(5435548);
Get_message(5435549);
Get_message(5435540);