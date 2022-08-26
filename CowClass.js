"use strict";

import {getCurrentDate, dateFormat, diffDates, sumDate, dateHandling, addSlashToDate} from "./dateFunctions.js";
export {Cow};

class Cow {

    constructor(id = "", isActive = "", name = "", age = "", calvingDate = "", inseminationDate = "", calvingPrognostic = "", milkMeasure = "", teatFR = [], teatFL = [], teatBR = [], teatBL = [], diseases = []){
        this.id = id;
        this.isActive = isActive;
        this.name = name;
        this.age = age;
        this.calvingDate = calvingDate;
        this.inseminationDate = inseminationDate;
        this.calvingPrognostic = calvingPrognostic;
        this.milkMeasure = milkMeasure;
        this.teatFR = teatFR;
        this.teatFL = teatFL;
        this.teatBR = teatBR;
        this.teatBL = teatBL;
        this.diseases = diseases;
        // this.calcCalvingPrognostic = function() {
        //     return dateHandling(this.inseminationDate, 8);
        // }
    }     
}