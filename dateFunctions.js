export {getCurrentDate, dateFormat, diffDates, sumDate, dateHandling, addSlashToDate};

function getCurrentDate(){
    let currentDate = new Date();
    let yearDate = currentDate.getFullYear();
    let monthDate = currentDate.getMonth();
    let dayDate = currentDate.getDate();
    
    return `${dayDate < 9 ? "0" + dayDate : dayDate}/${monthDate < 9 ? "0" + (monthDate + 1) : monthDate}/${yearDate}`; 
}

function dateFormat(string) {
    const dates = string.split("/");
    const finalDate = `${dates[2]}/${dates[1]}/${dates[0]}`
    return finalDate;
}

function diffDates(date1, date2, format = "") {
    let formatedDate1 = dateFormat(date1);
    let formatedDate2 = dateFormat(date2);
    let toDataType1 = new Date(formatedDate1);
    let toDataType2 = new Date(formatedDate2); 

    let diff =  toDataType2.getTime() - toDataType1.getTime();
    console.log(((diff / 60000) / 60) / 24);

    if (format == "days") {
        diff = ((diff / 60000) / 60) / 24;
        return diff.toFixed(1);
    }   
    
    if (format == "months") {
        diff = (((diff / 60000) / 60) / 24) / 30;
        return diff.toFixed(1);
    }

    if (format == "years") {
        diff = ((((diff / 60000) / 60) / 24) / 30) / 12;
        return diff.toFixed(1);
    }
}

function sumDate(date, years = 0, months = 0, days = 0) {
    let sumDate = date.setFullYear(date.getFullYear() + years)
    sumDate = date.setMonth(date.getMonth() + months);
    sumDate = date.setDate(date.getDate() + days); 
    return sumDate;
}

function dateHandling(date, months){
    let formatedData = dateFormat(date);
    let toDataType = new Date(formatedData);
    
    sumDate(toDataType, 0, months+1);
        
    let formatedData1 = `
    ${toDataType.getDate() > 9 ? toDataType.getDate() : "0" + toDataType.getDate()}/${toDataType.getMonth() > 9 ? toDataType.getMonth() : "0" + toDataType.getMonth()}/${toDataType.getFullYear()}`;

    return formatedData1;
}

function addSlashToDate() {
    if (document.querySelector(".data-parto").value.length == 2) {
        document.querySelector(".data-parto").value += "/";
    }
    if (document.querySelector(".data-parto").value.length == 5) {
        document.querySelector(".data-parto").value += "/";
    }

    if (document.querySelector(".data-inseminacao").value.length == 2) {
        document.querySelector(".data-inseminacao").value += "/";
    }
    if (document.querySelector(".data-inseminacao").value.length == 5) {
        document.querySelector(".data-inseminacao").value += "/";
    }
}