import { LightningElement,api,track } from 'lwc';

export default class UnderstandingVariables extends LightningElement {
    //private variables
    myName = "Govind"
    myAddress = "123 Main St"
    //use track keyword to keep track of object 
    @track myPersonality = {
        age : 23,
        sex : "Male",
        height : "5'10"
    }

    //public variables
    @api favTeam = "SRH"
    @api newABC = "old one"

}