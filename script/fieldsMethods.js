export { addSlashToDate, displayData, clearFields,preventEmptyFields };

const addSlashToDate = function () 
{
    if (document.querySelector(".calving-date-it").value.length == 2) 
        document.querySelector(".calving-date-it").value += "/";
    
    if (document.querySelector(".calving-date-it").value.length == 5) 
        document.querySelector(".calving-date-it").value += "/";
    
    if (document.querySelector(".insemination-date-it").value.length == 2) 
        document.querySelector(".insemination-date-it").value += "/";
    
    if (document.querySelector(".insemination-date-it").value.length == 5) 
        document.querySelector(".insemination-date-it").value += "/"; 
};

const displayData = function(data, id)
{
    document.querySelector(id).textContent = data; 
    document.querySelector(id).classList.remove("hidden");
};

const clearFields = function()
{
    //INPUT FIELDS
    document.querySelector(".cow-name-it").value            = "";
    document.querySelector(".cow-age-it").value             = "";
    document.querySelector(".calving-date-it").value        = "";
    document.querySelector(".insemination-date-it").value   = "";
    document.querySelector(".milk-measure-it").value        = "";

    //OUTPUT FIELDS
    document.querySelector(".cow-name").innerHTML = "";
    document.querySelector(".cow-name").classList.add("hidden");

    document.querySelector(".cow-age").innerHTML = "";
    document.querySelector(".cow-age").classList.add("hidden");

    document.querySelector(".calving-date").innerHTML = "";
    document.querySelector(".calving-date").classList.add("hidden");
    
    document.querySelector(".insemination-date").innerHTML = "";
    document.querySelector(".insemination-date").classList.add("hidden");

    document.querySelector(".milk-measure").innerHTML = "";
    document.querySelector(".milk-measure").classList.add("hidden");

    document.querySelector(".cattle-feed").innerHTML = "";
    document.querySelector(".cattle-feed").classList.add("hidden");

    document.querySelector(".calving-prognostic").innerHTML = "";
    document.querySelector(".calving-prognostic").classList.add("hidden"); 
};

const preventEmptyFields = function(array)
{
    return array.every((element) => {
        return document.querySelector(element).value !== "";
    });
};