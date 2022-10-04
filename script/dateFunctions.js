export {convertDateToJS, convertDateToUI, sumDate};

const convertDateToJS = function(date)
{
    const splVal = date.split("/");
    const convertedDate = `${splVal[2]}/${splVal[1]}/${splVal[0]}`;
    return convertedDate;
};

const convertDateToUI = function(date)
{
   return date.toLocaleDateString("pt-br");
};

const sumDate = function(date, days)
{
    const toDateType = new Date(date);
    const sumDate = toDateType.setDate(toDateType.getDate() + days);
    return new Date(sumDate);
};



