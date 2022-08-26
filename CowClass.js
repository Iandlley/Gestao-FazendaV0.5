"use strict";

export {Cow}

class Cow {
    constructor(id = "", isActive = "", name = "", age = "", calvingDate = "", inseminationDate = "", milkMeasure = "", calvingPrognostic = "", teatFR = "", teatFL = "", teatBR = "", teatBL = "", diseases = ""){
        this.id = id;
        this.isActive = isActive;
        this.name = name;
        this.age = age;
        this.calvingDate = calvingDate;
        this.inseminationDate = inseminationDate;
        this.milkMeasure = milkMeasure;
        this.calvingPrognostic = calvingPrognostic;
        this.teatFR = teatFR;
        this.teatFL = teatFL;
        this.teatBR = teatBR;
        this.teatBL = teatBL;
        this.diseases = diseases;
    }  
}