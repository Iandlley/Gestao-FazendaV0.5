"use strict";
import { diffDate, convertDateToJS } from "./dateFunctions.js";

///////////////////////////   HTML TAGS   ////////////////////////////

const btnEdit = document.querySelector(".btn-edit");


////////////////////////////  FUNCTIONS  /////////////////////////////

function displayData(arrayObj)
{
    let html = "";
    let milkAttention;
    let endLactationAttention;
    let currentDate = new Date().toLocaleDateString("en-US");
    
    for (let i = 0; i < arrayObj.length; i++)
    {
        // CHECK IF ELEMENTS NEEDS TO BE HIGHLIGHTED
        function checkRequiredAttention(attribute)
        {
            milkAttention = attribute[i].milkMeasure < 5 ? "attention" : "";

            if(diffDate(convertDateToJS(attribute[i].lactationEndDate),     (currentDate)) < 10)
            {
                endLactationAttention = "attention";
            } else {
                endLactationAttention = "";
            };
        }
        checkRequiredAttention(arrayObj);
        
        // DATA TO BE DISPLAYED ON SCREEN
        html += `
        <span class="cow-data">
            <h2><span class="cow-name">${arrayObj[i].name.toUpperCase()}</span></h2>
            <p>IDADE:<span class="cow-age">${arrayObj[i].age} anos</span></p>
            <p>D. PARTO:<span class="calving-date">${arrayObj[i].calvingDate}</span></p>
            <p>DEL:<span class="dol">${arrayObj[i].dol} dias</span></p>
            <p class="${milkAttention}">LEITE:<span class="milk-measure">${arrayObj[i].milkMeasure}L</span></p>
            <p>RAÇÃO:<span class="cattle-feed">${arrayObj[i].cattleFeed}kg</span></p>
            <p>D. INS:<span class="calving-prognostic">${arrayObj[i].inseminationDate}</span></p>
            <p>Prev. PARTO:<span class="calving-prognostic">${arrayObj[i].calvingPrognostic}</span></p>
            <p class="${endLactationAttention}">Fim LAC:<span class="end-lactation-date">${arrayObj[i].lactationEndDate}</span></p>
            <button class="btn-edit btn-edit${i}" onclick="alertar()">Editar</button>
        </span>`;

        document.querySelector(".span-section").innerHTML = html;
    };
};

function changeObjectsSequence(arr)
{
    let count = 0;
    let cd = new Date().toLocaleDateString("en-US");
    let attentionAttArray = [];
    let newArray = [];

    for(let i = 0; i < arr.length; i++)
    {
        //CHECKING ATTENTION LEVEL
        if (arr[i].milkMeasure < 5)                     {count += 1};
        if (diffDate(arr[i].lactationEndDate, cd) < 10) {count += 1};

        if (count == 2) {attentionAttArray.push(arr[i])};
        if (count == 1) {newArray.unshift(arr[i])};
        if (count == 0) {newArray.push(arr[i])};

        count = 0;
    };

    return attentionAttArray.concat(newArray);
};    

const alertar = function()
{
    alert(1);
};

/////////////////////////  FUNCTION CALLS   //////////////////////////

// RETRIEVE DATA FROM LOCAL STORAGE
const cowDataArray = JSON.parse(localStorage.getItem("cowDatabase"));
let cowData = changeObjectsSequence(cowDataArray);
displayData(cowData);


/////////////////////////   EVENT HANDLERS   /////////////////////////

// let allBtn = document.querySelectorAll(".btn-edit");
// console.log(allBtn);

//  document.querySelector(".btn-edit").addEventListener("click", function(e)
//  {
//     console.log(e);
//  });


