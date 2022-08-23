"use strict";

class Cow {

    constructor(name = "", age = "", calvingDate = "", endLactationDate = "", inseminationDate = "", milkMeasure = "", cattleFeed = "", silageFeed = "", gestationTime = "", calvingPrognostic = ""){
        this.name = name;
        this.age = age;
        this.calvingDate = calvingDate;
        this.endLactationDate = endLactationDate;
        this.inseminationDate = inseminationDate;
        this.milkMeasure = milkMeasure;
        this.cattleFeed = cattleFeed;
        this.silageFeed = silageFeed;
        this.gestationTime = gestationTime;
        this.calvingPrognostic = calvingPrognostic;
    }
}

const processData = document.querySelector(".btn-data");
let cowsMap = new Map();
let nameArray = [];


let currentDate = function(){
    let currentDate = new Date();
    let yearDate = currentDate.getFullYear();
    let monthDate = currentDate.getMonth();
    let dayDate = currentDate.getDate();
    
    return `${yearDate}/${monthDate}/${dayDate}`; 
}

function dateFormat(string) {
    const dates = string.split("/");
    const finalDate = `${dates[2]}/${dates[1]}/${dates[0]}`
    return finalDate;
}

function diffDates(date1, date2) {
    let formatedDate1 = dateFormat(date1);
    let formatedDate2 = dateFormat(date2);
    let toDataType1 = new Date(formatedDate1);
    let toDataType2 = new Date(formatedDate2); 
}

function sumDate(date, years = 0, months = 0, days = 0) {
    let sumDate = date.setFullYear(date.getFullYear() + years)
    sumDate = date.setMonth(date.getMonth() + months);
    sumDate = date.setDate(date.getDate() + days); 
    return sumDate;
}

function dateHandling(date, months){
    let formatedData = dateFormat(date);
    let toDataType = new Date(formatedData);
    
    sumDate(toDataType, 0, months+1);
        
    let formatedData1 = `
    ${toDataType.getDate() > 9 ? toDataType.getDate() : "0" + toDataType.getDate()}/${toDataType.getMonth() > 9 ? toDataType.getMonth() : "0" + toDataType.getMonth()}/${toDataType.getFullYear()}`;

    return formatedData1;
}

function addSlashToDate() {
    if (document.querySelector(".data-parto").value.length == 2) {
        document.querySelector(".data-parto").value += "/";
    }
    if (document.querySelector(".data-parto").value.length == 5) {
        document.querySelector(".data-parto").value += "/";
    }

    if (document.querySelector(".data-inseminacao").value.length == 2) {
        document.querySelector(".data-inseminacao").value += "/";
    }
    if (document.querySelector(".data-inseminacao").value.length == 5) {
        document.querySelector(".data-inseminacao").value += "/";
    }
}

document.querySelector(".data-parto").addEventListener("keydown", (e)=> {
    if(e.key != "Backspace") {
        addSlashToDate()
    }
})

document.querySelector(".data-inseminacao").addEventListener("keydown", (e)=> {
    if(e.key != "Backspace") {
        addSlashToDate()
    }
})

processData.addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelectorAll(".em").forEach(function(em) {
        em.classList.remove("hidden");
    })

    let cowName = document.querySelector(".nome-vaca").value.toUpperCase();
       document.querySelector(".cow-name").innerHTML = cowName;

    let age = document.querySelector(".age").value.toUpperCase();
        document.querySelector(".cow-age").innerHTML = age;

    let inseminationDate = document.querySelector(".data-inseminacao").value;  
        document.querySelector(".calving-prognostic").innerHTML = dateHandling(inseminationDate, 9);
        
    let calvingDate = document.querySelector(".data-parto").value;
        document.querySelector(".end-lactation").innerHTML = dateHandling(calvingDate, 8);
    
    let milkMeasure = document.querySelector(".medicao-leite").value;
        document.querySelector(".cattle-feed").innerHTML = milkMeasure >     4 ? (milkMeasure / 3).toFixed(2) + "Kg" : "0Kg";
        document.querySelector(".cattle-silage").innerHTML = milkMeasure >     5 ? "25kg" : "15kg";  
})

 // let currentCow = new Cow(nameCow);

 // cowsMap.set(nameCow, currentCow);
    // console.log(cowsMap.get(nameCow));

    // console.log("----------------------------------------------")
    // console.log(cowsMap.size);





































