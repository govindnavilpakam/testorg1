import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    firstNumber=24;//First Number is a property(same thing as variable but in js terminology-always defined in camel case)
    secondNumber=12;
    result;
    isShowResult=false;
    //functions for retreiving the Dynamic value from html to js function with the help of functions
    handleFirstNumber(event)
    {
        this.firstNumber=event.target.value;//this is used to capture data from user which is provided in the html
    }
    handleSecondNumber(event)
    {
        this.secondNumber=event.target.value;//capture data from user
    }
    //Creating a function to the Add button
    handleAddClick()
    {
        //To convert string to integer or number we use ParseInt
        //let result = parseInt(this.firstNumber)+parseInt(this.secondNumber);
        this.result = parseInt(this.firstNumber)+parseInt(this.secondNumber);
        //alert('Result is '+result);
        this.isShowResult=true;
    }
    handleSubClick(){
        this.result = this.firstNumber-this.secondNumber;
        this.isShowResult=true;
    }
    handleMulClick(){
        this.result = this.firstNumber*this.secondNumber;
        this.isShowResult=true;
    }
    handleDivClick(){
        this.result = this.firstNumber/this.secondNumber;
        this.isShowResult=true;
    }
    get badgeClass(){
        //return this.isShowResult?'slds-badge slds-theme_success':'slds-badge slds-theme_error';
        const theme=this.result>=0?'slds-theme_success':'slds-theme_error';
        return 'slds-badge '+theme;
    }
}