import { addSlashToDate, displayData, clearFields } from "./fieldsMethods.js";
import { convertDateToJS, convertDateToUI, sumDate, subDate, diffDate } from "./dateFunctions.js";
import { Cow } from "./CowClass.js";

///////////////////////////   HTML TAGS   //////////////////////////// 

const btnProcessData    = document.querySelector(".btn-process-data");
const btnSaveOnDatabase = document.querySelector(".btn-save-database");
const btnClearFields    = document.querySelector(".btn-clear-fields");

let cowNameInput          = document.querySelector(".cow-name-it");
let cowAgeInput           = document.querySelector(".cow-age-it");
let calvingDateInput      = document.querySelector(".calving-date-it");
let inseminationDateInput = document.querySelector(".insemination-date-it");
let milkMeasureInput      = document.querySelector(".milk-measure-it");

/////////////////////   GLOBAL DATA FROM COWS   //////////////////////

let cowName;
let cowAge;
let calvingDate;
let inseminationDate;
let calvingPrognostic;
let milkMeasure;
let cattleFeed;
let dol;
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
    const currentDate = new Date().toLocaleDateString();
    calvingPrognostic = convertDateToUI(sumDate(convertDateToJS(inseminationDate), 280));
    cattleFeed = Number(milkMeasure) / 3; 
    dol = diffDate(currentDate, convertDateToJS(calvingDate)); 
 
    // DISPLAY ON UI
    displayData(cowName, ".cow-name");
    displayData(`${cowAge} anos`, ".cow-age");
    displayData(calvingDate, ".calving-date");
    displayData(inseminationDate, ".insemination-date");
    displayData(calvingPrognostic, ".calving-prognostic");
    displayData(`${milkMeasure}L`, ".milk-measure");
    displayData(`${cattleFeed}KG` ,".cattle-feed")
}); 


btnSaveOnDatabase.addEventListener("click", (e)=> 
{
    e.preventDefault();

    // CREATE COW OBJECT AND PUSH TO ARRAY
    const currentCowObj = new Cow(cowName, cowAge, calvingDate, inseminationDate, calvingPrognostic, milkMeasure, cattleFeed, dol);
 
    dataCowsArray.push(currentCowObj);
    
    // SAVE ON LOCAL STORAGE
    localStorage.setItem(JSON.stringify(dataCowsArray));

    // CLEAR FIELDS
    clearFields();
}); 


btnClearFields.addEventListener("click", (e)=> 
{
    e.preventDefault();

    // CLEAR FIELDS
    clearFields();
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


