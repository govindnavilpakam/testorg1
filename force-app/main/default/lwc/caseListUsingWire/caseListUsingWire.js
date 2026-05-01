import { LightningElement,wire } from 'lwc';
import getCasesInSequence from '@salesforce/apex/CaseController.getCasesInSequence';

export default class CaseListUsingWire extends LightningElement {

    caseList;
    errorMessage;
    @wire(getCasesInSequence)

    wiredCases({data,error}){
        try{
            if(data){
                this.caseList=data;
                this.errorMessage='';
            }
            if(error){
                this.errorMessage = error.body.message;
                this.caseList=undefined;
                console.log('Error while connecting to Apex '+error)
            }
        }
        catch(error){
            console.log('Some error occurred');
        }
    }
}