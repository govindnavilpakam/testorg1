import { LightningElement } from 'lwc';

export default class CaseFormWithEvents extends LightningElement {
    objectApiName="Case"

    handleSubmit(event){
        console.log('Form is sumitted for Case creation'+ JSON.stringify(event.detail));
    }

    handleSuccess(event){
        alert("Case created Successfully!"+ JSON.stringify(event.detail));
    }


}