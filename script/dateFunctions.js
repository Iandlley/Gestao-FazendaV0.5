export {convertDateToJS, convertDateToUI, sumDate, subDate, diffDate};

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

const subDate = function(date, days)
{
    const toDateType = new Date(date);
    const subDate = toDateType.setDate(toDateType.getDate() - days);
    return new Date(subDate);
};

const diffDate = function(date1, date2)
{
    const toDateType1 = new Date(date1);
    const toDateType2 = new Date(date2);
    const diffDate = toDateType1.getTime() - toDateType2.getTime();
    return diffDate / (1000 * 60 * 60 * 24);
}

