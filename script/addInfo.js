import { addSlashToDate, displayData } from "./fieldsMethods.js";
import { convertDateToJS, convertDateToUI, sumDate } from "./dateFunctions.js";

///////////////////////////   HTML TAGS   //////////////////////////// 

const btnProcessData    = document.querySelector(".btn-process-data");
const btnSaveOnDatabase = document.querySelector(".btn-save-database");
const btnClearFields    = document.querySelector(".btn-clear-fields");

let cowNameInput          = document.querySelector(".cow-name-it");
let cowAgeInput           = document.querySelector(".cow-age-it");
let calvingDateInput      = document.querySelector(".calving-date-it");
let inseminationDateInput = document.querySelector(".insemination-date-it");
let calvingPrognostic     = document.querySelector(".calving-prognostic");
let milkMeasureInput      = document.querySelector(".milk-measure-it");

/////////////////////   GLOBAL DATA FROM COWS   //////////////////////

let cowName;
let cowAge;
let calvingDate;
let inseminationDate;
let milkMeasure;
const dataCowsArray = [];

////////////////////////   EVENT HANDLERS   ///////////////////////// 

btnProcessData.addEventListener("click", (e)=> 
{
    e.preventDefault();

    // RECEIVED DATA
    cowName           = cowNameInput.value;
    cowAge            = cowAgeInput.value;
    calvingDate       = calvingDateInput.value;
    inseminationDate  = inseminationDateInput.value; 
    milkMeasure       = milkMeasureInput.value;

    // HANDLE DATA

 
    // DISPLAY ON UI
    displayData(cowName, ".cow-name");
    displayData(cowAge, ".cow-age");
    displayData(calvingDate, ".calving-date");
    displayData(inseminationDate, ".insemination-date");
    //displayData(calvingPrognostic, ".cow-name");
    displayData(milkMeasure, ".milk-measure");
    
}); 


btnSaveOnDatabase.addEventListener("click", (e)=> 
{
    e.preventDefault();

    // CREATE COW OBJECT

    // SAVE ON LOCAL STORAGE
    

}); 


btnClearFields.addEventListener("click", (e)=> 
{
    e.preventDefault();

    cowNameInput.value          = "";
    cowAgeInput.value           = "";
    calvingDateInput.value      = "";
    inseminationDateInput.value = "";
    milkMeasureInput.value      = "";
}); 


////////////////////   ADD SLASH TO DATE FIELDS   ////////////////////

document.querySelector(".calving-date-it").addEventListener("keydown", (e)=> {
    if(e.key !== "Backspace") {
        addSlashToDate();
    }
})

document.querySelector(".insemination-date-it").addEventListener("keydown", (e)=> {
    if(e.key != "Backspace") {
        addSlashToDate();
    }
})


