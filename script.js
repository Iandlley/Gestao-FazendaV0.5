"use strict";

import {getCurrentDate, dateFormat, diffDates, sumDate, dateHandling, addSlashToDate} from "./dateFunctions.js";

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
const btnSaveData = document.querySelector(".save-database");


let array = [0, 1, 2, 3];

let jsonString = JSON.stringify(array);
let jsonParse = JSON.parse(jsonString);
jsonParse.push(2, 3, 4);


console.log(jsonString);
console.log(jsonParse);

// localStorage.setItem();

// testes com local storage

btnSaveData.addEventListener("click", function() {

    if (!localStorage.array) {
        localStorage.setItem("array", JSON.stringify(array));
    }

    let tempArray = JSON.parse(localStorage.getItem("array"));
    tempArray.push(112);
    localStorage.setItem("array",  JSON.stringify(tempArray));
})

// let copiaArray = (localStorage.getItem("array"));
// console.log(copiaArray[0]);


document.querySelector(".data-parto").addEventListener("keydown", (e)=> {
    if(e.key !== "Backspace") {
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

    let age = document.querySelector(".age").value;
        document.querySelector(".cow-age").innerHTML = age;

    let inseminationDate = document.querySelector(".data-inseminacao").value;  
        document.querySelector(".calving-prognostic").innerHTML = dateHandling(inseminationDate, 9);
        
    let calvingDate = document.querySelector(".data-parto").value;
        document.querySelector(".end-lactation").innerHTML = dateHandling(calvingDate, 9);
    
    let milkMeasure = document.querySelector(".medicao-leite").value;
        document.querySelector(".cattle-feed").innerHTML = milkMeasure >     4 ? (milkMeasure / 3).toFixed(2) + "Kg" : "0Kg";
        document.querySelector(".cattle-silage").innerHTML = milkMeasure >     5 ? "25kg" : "15kg";  

    document.querySelector(".permanency").innerHTML = age > 12 ? "Descarte" : "Mantenha"; 
    
    let currentDate = getCurrentDate();
    let  calvingPrognostic = dateHandling(inseminationDate, 9)

    if (diffDates(currentDate, calvingPrognostic, "months") <= 2){
        document.querySelector(".situation").innerHTML = "Seca";
    } else {
        document.querySelector(".situation").innerHTML = "Lactação";  
    }   
})



 // let currentCow = new Cow(nameCow);

 // cowsMap.set(nameCow, currentCow);
    // console.log(cowsMap.get(nameCow));

    // console.log("----------------------------------------------")
    // console.log(cowsMap.size);





































