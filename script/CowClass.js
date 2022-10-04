"use strict";

export class Cow 
{ 
    constructor
    (
        id = "", 
        name = "", 
        age = "", 
        calvingDate = "", 
        inseminationDate = "", 
        milkMeasure = "",
        dol = "",
        calvingPrognostic = ""
        
    ){
        this.id = id;
        this.name = name;
        this.age = age;
        this.calvingDate = calvingDate;
        this.inseminationDate = inseminationDate;
        this.milkMeasure = milkMeasure;
        this.dol = dol;
        this.calvingPrognostic = calvingPrognostic;
    };  
};