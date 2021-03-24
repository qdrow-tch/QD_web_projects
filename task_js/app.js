'use strict';
//Задание №1

for( let i = 0; i <=10; i++) {
    if (i!=0){
        if((i%2)==0){
            console.log(`${i}-четное число`)
        }
        else{
            console.log(`${i}-нечетное число`)
        }
    }
    else{
        console.log(`${i}-это ноль`)
    }
}

//Задание №2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
            likes: 10,
            dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
            likes: 3,
            dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//Задание №3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let discount = 15;
products.forEach(function(product){
                 product.price *= 1-(discount/100);
                 console.log(`${product.id} discount price: ${product.price}`)
                 })

//Задание №4

const products_2 = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg","32"]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },

];

//Задание №4:пункт 1

let result = products_2.filter(function(product){
                  if (product.hasOwnProperty("photos")){
                      return product.photos.length != 0;
                  }
                  })
console.log(result);

//Задание №4:пункт 2

products_2.sort(function(a,b){
    if (a.price > b.price){
        return 1;
    }
    if (a.price < b.price){
        return -1;
    }
    return 0;
})

console.log(products_2);

//Задание №5

for(let i = 0; i<=9; console.log(i++)){}

//Задание №6

for(let i = 1; i<=20; i++){
    console.log(`${i}: ` + "x".repeat(i));
}