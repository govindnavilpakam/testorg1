import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import fetchTasksForAccount from '@salesforce/apex/DependentWireController.fetchTasksForAccount';

export default class DependentWires extends LightningElement {
    //Drop my component on Account Record Page
    //This means I will have the recordId of the Account

    //Using this record id, get the Name of the Account -this will be my first wire
    //Once I have my account name, I will call apex to search for tasks associated to that account name - this will be my second wire

    @api recordId;
    accountName;
    taskList;
    taskFound=false;
    fields=[ACCOUNT_NAME];

    @wire(getRecord,{recordId:'$recordId',fields:'$fields'})
    wiredAccount({data,error}){
        if(data){
            console.log('Name is: '+JSON.stringify(data));
            this.accountName = data.fields.Name.value;
        }
        if(error){

        }
    }


    @wire(fetchTasksForAccount,{accountName:'$accountName'})
    wiredTasks({data,error}){
        if (data){
            console.log('Task data: '+JSON.stringify(data));
            this.taskList = data;
            this.taskFound = true;
        }
        if(error){

        }
    }

}