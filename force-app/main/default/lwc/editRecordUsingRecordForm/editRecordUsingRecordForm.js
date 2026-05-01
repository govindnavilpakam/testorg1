import { LightningElement,api } from 'lwc';
const FIELDS=["CaseNumber","Type","Reason"]

export default class EditRecordUsingRecordForm extends LightningElement {

    @api recordId;
    fields=["CaseNumber","Type","Reason"];
}