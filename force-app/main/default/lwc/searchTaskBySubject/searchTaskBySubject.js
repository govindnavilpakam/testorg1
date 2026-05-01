import { LightningElement,wire } from 'lwc';
import fetchTasksBySubject from '@salesforce/apex/TaskController.fetchTasksBySubject';

export default class SearchTaskBySubject extends LightningElement {

    taskList;
    subjectText='Follow Up';
    @wire(fetchTasksBySubject,{subjectString:'$subjectText'}) //dynamic binding for reactivity
    wiredTasks({data,error}){
        if(data){
            this.taskList=data;
        }
        if(error){
            console.log("Something went wrong"+error.body.message)
        }
    }
}