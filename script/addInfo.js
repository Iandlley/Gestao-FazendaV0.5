import { addSlashToDate } from "./fieldsMethods.js";

///////////////////////////   HTML TAGS   //////////////////////////// 

const btnProcessData = document.querySelector(".btn-process-data");
const btnSaveOnDatabase = document.querySelector(".btn-save-database");
const btnClearFields = document.querySelector(".btn-clear-fields");

let cowNameInput = document.querySelector(".cow-name");
let cowAgeInput = document.querySelector(".cow-age");
let calvingDateInput = document.querySelector(".calving-date");
let inseminationDateInput = document.querySelector(".insemination-date");
let milkMeasureInput = document.querySelector(".milk-measure");

/////////////////////   GLOBAL DATA FROM COWS   //////////////////////

let cowName;
let cowAge;
let calvingDate;
let inseminationDate;
let milkMeasure;
let calvingPrognostic;

////////////////////////   EVENT HANDLERS   ///////////////////////// 

btnProcessData.addEventListener("click", (e)=> 
{
    e.preventDefault();

    cowName = cowNameInput.value;
    cowAge = cowAgeInput.value;
    calvingDate = calvingDateInput.value;
    inseminationDate = inseminationDateInput.value;
    milkMeasure = milkMeasureInput.value;
    //calvingPrognostic = inseminationDate + 9 meses;
}); 

btnSaveOnDatabase.addEventListener("click", (e)=> 
{
    e.preventDefault();

    
    

}); 

btnClearFields.addEventListener("click", (e)=> 
{
    e.preventDefault();

    cowNameInput.value = "";
    cowAgeInput.value = "";
    calvingDateInput.value = "";
    inseminationDateInput.value = "";
    milkMeasureInput.value = "";
}); 

////////////////////   ADD SLASH TO DATE FIELDS   ////////////////////

document.querySelector(".calving-date").addEventListener("keydown", (e)=> {
    if(e.key !== "Backspace") {
        addSlashToDate();
    }
})

document.querySelector(".insemination-date").addEventListener("keydown", (e)=> {
    if(e.key != "Backspace") {
        addSlashToDate();
    }
})

























































