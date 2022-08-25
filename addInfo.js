"use strict";

import {Cow} from "./CowClass.js";
import {getCurrentDate, dateFormat, diffDates, sumDate, dateHandling, addSlashToDate} from "./dateFunctions.js";

let cowName;
let age;
let calvingDate;
let inseminationDate;
let milkMeasure;

const processData = document.querySelector(".btn-data");
const btnSaveData = document.querySelector(".save-database");
let cowArray = [];

let cow = new Cow();
console.log(cow);

document.querySelector(".data-parto").addEventListener("keydown", (e)=> {
    if(e.key !== "Backspace") {
        addSlashToDate();
    }
})

document.querySelector(".data-inseminacao").addEventListener("keydown", (e)=> {
    if(e.key != "Backspace") {
        addSlashToDate();
    }
})

processData.addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelectorAll(".em").forEach(function(em) {
        em.classList.remove("hidden");
    })

    cowName = document.querySelector(".nome-vaca").value.toUpperCase();
       document.querySelector(".cow-name").innerHTML = cowName;

    age = document.querySelector(".age").value;
        document.querySelector(".cow-age").innerHTML = age;

    calvingDate = document.querySelector(".data-parto").value; 
        document.querySelector(".calving-date").innerHTML = calvingDate;

    inseminationDate = document.querySelector(".data-inseminacao").value; 
        document.querySelector(".insemination-date").innerHTML = inseminationDate;

    milkMeasure = document.querySelector(".medicao-leite").value; 
        document.querySelector(".milk-measure").innerHTML = milkMeasure;
     //280 dias // del dias em leite em dias // 
})

btnSaveData.addEventListener("click", function() {
    if (!localStorage.cowArrayLS) {
        localStorage.setItem("cowArrayLS", JSON.stringify(cowArray));
    }
})







































