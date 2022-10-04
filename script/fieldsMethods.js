export { addSlashToDate, displayData }

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


