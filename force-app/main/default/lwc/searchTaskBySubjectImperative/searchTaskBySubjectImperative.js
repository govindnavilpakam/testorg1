import { LightningElement } from 'lwc';
import fetchTasksBySubject from '@salesforce/apex/TaskController.fetchTasksBySubject';


export default class SearchTaskBySubjectImperative extends LightningElement {
   
   
    subject;
    taskList;
    errorMessage;
    isResultRecieved=false;
    handleSubjectChange(event){
        this.subject=event.target.value;
    }

    searchTasks(){
        //here, we want to call apex and pass subject that user has entered. recieve the task list
        //as soon as we recieve the task list, we will map it to a variable to show on UI
        fetchTasksBySubject({subjectString:this.subject})
        .then(result=>{
            console.log('Result recicevd: '+JSON.stringify(result));
            this.taskList=result;
            this.isResultRecieved=true;
        }
        )
        .catch(error=>{
            console.log('Error recicevd: '+error);
            this.errorMessage=error.body.message;
        }
        )
    }

}