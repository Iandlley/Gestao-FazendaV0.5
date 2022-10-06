"use strict";

import { diffDate, convertDateToJS } from "./dateFunctions.js";

const cowDataArray = JSON.parse(localStorage.getItem("cowDatabase"));
console.log(cowDataArray)


function displayData(arrayObj)
{
    let html = "";
    let milkAttention;
    let endLactationAttention;
    let currentDate = new Date().toLocaleDateString("pt-br");
    


    for (let i = 0; i < arrayObj.length; i++)
    {
        milkAttention = arrayObj[i].milkMeasure < 5 ? "attention" : "";

        console.log(arrayObj[i].lactationEndDate);
        console.log(currentDate);
        
        if(diffDate(convertDateToJS(arrayObj[i].lactationEndDate), convertDateToJS(currentDate)) < 10)
        {
            endLactationAttention = "attention";

        } else {
            endLactationAttention = "";
        }
        
             
        


        html += `
        <span class="cow-data">
            <h2><span class="cow-name">${arrayObj[i].name.toUpperCase()}</span></h2>
            <p>IDADE:<span class="cow-age">${arrayObj[i].age} anos</span></p>
            <p>DEL:<span class="dol">${arrayObj[i].dol} dias</span></p>
            <p class="${milkAttention}">LEITE:<span class="milk-measure">${arrayObj[i].milkMeasure}L</span></p>
            <p>RAÇÃO:<span class="cattle-feed">${arrayObj[i].cattleFeed}kg</span></p>
            <p>D. PARTO:<span class="calving-date">${arrayObj[i].calvingDate}</span></p>
            <p>Prev. PARTO:<span class="calving-prognostic">${arrayObj[i].calvingPrognostic}</span></p>
            <p class="${endLactationAttention}">Fim LAC:<span class="end-lactation-date">${arrayObj[i].lactationEndDate}</span></p>
        </span>`;

        document.querySelector(".span-section").innerHTML = html;
    };
};

displayData(cowDataArray);