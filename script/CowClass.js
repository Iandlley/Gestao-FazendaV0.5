"use strict";

export class Cow 
{
    calvingPrognostic = "";
    
    constructor
    (
        id = "", 
        name = "", 
        age = "", 
        calvingDate = "", 
        inseminationDate = "", 
        milkMeasure = "",
    )
    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.calvingDate = calvingDate;
        this.inseminationDate = inseminationDate;
        this.calvingPrognostic = calvingPrognostic;
        this.milkMeasure = milkMeasure;
    };  
};