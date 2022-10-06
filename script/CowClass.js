"use strict";

export class Cow 
{ 
    constructor
    ( 
        name = "", 
        age = "", 
        calvingDate = "", 
        inseminationDate = "",
        calvingPrognostic = "", 
        milkMeasure = "",
        cattleFeed = "",
        dol = "" 
    ){
        this.name = name;
        this.age = age;
        this.calvingDate = calvingDate;
        this.inseminationDate = inseminationDate;
        this.calvingPrognostic = calvingPrognostic;
        this.milkMeasure = milkMeasure;
        this.cattleFeed = cattleFeed;
        this.dol = dol;
    };  
};