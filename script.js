"use strict";

const processData = document.querySelector(".btn-data");

function dateConversion(string) {
    const dates = string.split("/");

    const finalDate = `${dates[2]}/${dates[1]}/${dates[0]}`
    console.log(finalDate)
    return finalDate;
}

let partoDate = new Date();
let inseminacaoDate = new Date()

let currentDate = function(){
    let currentDate = new Date();
    let yearDate = currentDate.getFullYear();
    let monthDate = currentDate.getMonth() + 1;
    let dayDate = currentDate.getDate();
    
    return `${yearDate}/${monthDate}/${dayDate}`; 
}

console.log(currentDate());


let date1 = new Date(dateConversion("22/07/2022"));
let date2 = new Date(dateConversion("15/07/2022"));

console.log(date1.getTime());

let resultado = date1.getTime() - date2.getTime();
console.log(resultado);