import { LightningElement } from 'lwc';
import createAccountWithName from '@salesforce/apex/ToastController.createAccountWithName';
import { ShowToastEvent } from "lightning/platformShowToastEvent";


export default class ToastDisplay extends LightningElement {

    accountName;

    handleNameChange(event){
        this.accountName = event.target.value;
    }

    handleAccountCreation(){
        console.log(this.accountName)
        //i want to call apex- create an account, comeback here and show user a success message

        if(this.accountName){
            createAccountWithName({accountName:this.accountName})
            .then(result => {
                console.log("Account Created");
                this.showToast('Success!','Your record is created!','success','sticky');
            })
            .catch(error=>{
                console.log("Error received: "+error.body.message);
                this.showError('Error!',"Something went wrong! "+error.body.message,"error",'sticky');
            })
        }else{
            this.showError('Error!',"How can you save without name you dumbass","error",'sticky')
        }

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