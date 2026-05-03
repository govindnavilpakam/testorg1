import { LightningElement,wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import CASE_OBJ from '@salesforce/schema/Case';
import SUBJECT from '@salesforce/schema/Case.Subject';
import PRIORITY from '@salesforce/schema/Case.Priority';
import DESCRIPTION from '@salesforce/schema/Case.Description';
import RECID from '@salesforce/schema/Case.RecordTypeId';
import {NavigationMixin} from 'lightning/navigation';
import { ShowToastEvent } from "lightning/platformShowToastEvent";



export default class CustomCaseCreator extends NavigationMixin(LightningElement) {


    subject='';
    priority='';
    description='';
    recordTypeId='';

    //recordTypeId

    @wire(getObjectInfo,{ objectApiName: CASE_OBJ }) 
    caseRecord({data,error}){
        if(data){
            let recordTypeDetails = data.recordTypeInfos;
            console.log('Data receieved is '+JSON.stringify(recordTypeDetails))
            Object.keys(recordTypeDetails).forEach(key => {
                const recordTypeInfo = recordTypeDetails[key];
                if(recordTypeInfo.name == 'SMS Community Cases'){
                    this.recordTypeId = recordTypeInfo.recordTypeId;
                }
            })
        }
    }



    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }

    populateSubject(event){
        console.log(event.detail.value);
        this.subject = event.detail.value;
    }

    populatePriority(event){
        console.log(event.detail.value);
        this.priority=event.detail.value;
    }

    populateDescription(event){
        console.log(event.detail.value);
        this.description=event.detail.value;
    }

    // I have the values now, i wanna create case without calling apex or server side, we have to call and talk to servr directly

    async createCase(){
        //we have send the objectApiName and the list of fields
        //Case object
        //subject,priority,description

        const fields={};
        fields[SUBJECT.fieldApiName]=this.subject;
        fields[PRIORITY.fieldApiName]=this.priority;
        fields[DESCRIPTION.fieldApiName]=this.description;
        fields[RECID.fieldApiName]=this.recordTypeId;

        let recordInput={apiName:CASE_OBJ.objectApiName,fields}
        await createRecord(recordInput)
        .then((record)=>{
            this.showToast('Success!','Your record has been successfully created','success','sticky');
            // this.navigateToRecord(record.Id);
            setTimeout(() => {
                this.navigateToRecord(record.id);
            }, 500);
        })
        .catch((error)=>{
            alert("Ache se dekhle lodu "+error.message.body);
        })
    }


    navigateToRecord(recordId){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:recordId,
                objectApiName:'Case',
                actionName:'view'
            }
        });
    }

    showToast(title,message,variant,mode) {
    const event = new ShowToastEvent({
      title: title,
      message:message,
      variant:variant,
      mode: mode  
    });
    this.dispatchEvent(event);
    }
}