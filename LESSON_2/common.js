"use strict";

let monthBudget = prompt('Ваш бюджет на месяц?', '');
let currentData = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: monthBudget,
    timeData: currentData,
    expences: {},
    optionalExpences: {},
    income: [],
    saving: false
};

// for(let i = 0; i < 2; i++){
//     let a = prompt('Обязательная статья расходов');
//     let b = prompt('Цена');
//     appData.expences[a] = b;
// }

// let i = 0;
// while(i < 2){
//     let a = prompt('Обязательная статья расходов');
//     let b = prompt('Цена');
//     appData.expences[a] = b;
//     i++;
// }


let i = 0;
do{
    let a = prompt('Обязательная статья расходов');
    let b = prompt('Цена');
    appData.expences[a] = b;
    i++;
}
while(i < 2);

const response = appData.budget / 30;
alert(response.toFixed(2));