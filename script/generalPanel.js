"use strict";

const cowDataArray = JSON.parse(localStorage.getItem("cowDatabase"));


function displayData(arrayObj)
{
    let html = "";
    for (let i = 0; i < arrayObj.length; i++)
    {
        html += `
        <span class="cow-data">
            <h2><span class="cow-name">${arrayObj[i].name.toUpperCase()}</span></h2>
            <p>IDADE:<span class="cow-age">${arrayObj[i].age} anos</span></p>
            <p>DEL:<span class="dol">${arrayObj[i].dol} dias</span></p>
            <p>LEITE:<span class="milk-measure">${arrayObj[i].milkMeasure}L</span></p>
            <p>RAÇÃO:<span class="cattle-feed">${arrayObj[i].cattleFeed}kg</span></p>
            <p>D. PARTO:<span class="calving-date">${arrayObj[i].calvingDate}</span></p>
            <p>Prev. PARTO:<span class="calving-prognostic">${arrayObj[i].calvingPrognostic}</span></p>
        </span>`;


        document.querySelector(".span-section").innerHTML = html;
    };
};

displayData(cowDataArray);
