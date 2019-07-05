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
let ans1 = prompt('Обязательная статья расходов');
let ans2 = prompt('Цена');
let ans3 = prompt('Обязательная статья расходов');
let ans4 = prompt('Цена');


appData.expences.ans1 = ans2;
appData.expences.ans3 = ans4;
const response = monthBudget / 30;
alert(response.toFixed(2));