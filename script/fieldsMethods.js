export const addSlashToDate = function () 
{
    if (document.querySelector(".calving-date").value.length == 2) 
        document.querySelector(".calving-date").value += "/";
    
    if (document.querySelector(".calving-date").value.length == 5) 
        document.querySelector(".calving-date").value += "/";
    
    if (document.querySelector(".insemination-date").value.length == 2) 
        document.querySelector(".insemination-date").value += "/";
    
    if (document.querySelector(".insemination-date").value.length == 5) 
        document.querySelector(".insemination-date").value += "/"; 
};



