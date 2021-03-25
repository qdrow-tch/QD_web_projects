'use strict';

//Задание №1

function Decomposition(value) {
    if (!Number.isInteger(value) || value < 0 || value > 999) {
        console.log("Decomposition: аргумент не является числом от 0 от 999")
        return null;
    }
    else {
        let Dec_number = {
            units: value % 10,
            tens: Math.floor(value / 10) % 10,
            hundreds: Math.floor(value / 100)
        }
        return Dec_number;
    }
}

console.log(Decomposition(1));
console.log(Decomposition(12));
console.log(Decomposition(123));
console.log(Decomposition(""));
console.log(Decomposition("132"));

//Задание №1.1

function Product_ES5(name, price) {
    this.name = name;
    this.price = price;
}

Product_ES5.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

let prodES5 = new Product_ES5("Cheese", 200);
prodES5.make25PercentDiscount();
console.log(prodES5.price);



class Product_ES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}
let prodES6 = new Product_ES6("Milk", 100);
prodES6.make25PercentDiscount();
console.log(prodES6.price);

//Задание №1.2

function Post_ES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post_ES5.prototype.edit = function (some_text) {
    this.text = some_text;
}


function AttachedPost_ES5(author, text, date) {
    Post_ES5.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost_ES5.prototype = Object.create(Post_ES5.prototype);
AttachedPost_ES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}
AttachedPost_ES5.prototype.constructor = AttachedPost_ES5;


var get_date = new Date();

let postES5 = new Post_ES5("USER-1-postES5:", "сообщение", new Date());
postES5.edit("Use Edit to postES5");
console.log(postES5.author, postES5.text, postES5.date);

let attach_mesES5 = new AttachedPost_ES5("USER-2-attachES5:", "сообщение", new Date());
attach_mesES5.edit("Use Edit to Attach_mesES5");
attach_mesES5.makeTextHighlighted();
console.log(attach_mesES5.author, attach_mesES5.text, attach_mesES5.date, attach_mesES5.highlighted);


class Post_ES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(some_text) {
        this.text = some_text;
    }
}

class AttachedPost_ES6 extends Post_ES6 {
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
}
AttachedPost_ES6.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let postES6 = new Post_ES6("USER-1-postES6:", "сообщение", new Date());
postES6.edit("Use Edit to postES6");
console.log(postES6.author, postES6.text, postES6.date);

let attach_mesES6 = new AttachedPost_ES5("USER-2-attachES6:", "сообщение", new Date());
attach_mesES6.makeTextHighlighted();
attach_mesES6.edit("Use Edit to Attach_mesES6");
console.log(attach_mesES6.author, attach_mesES6.text, attach_mesES6.date, attach_mesES6.highlighted);

