import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = "Subhashini";

    handleNameChange(){
        this.userName = "Vinod"
    }

    constructor(){
        super();
        //console.log("Constructor is called")
    }

    connectedCallback() {
        //console.log("connectedCallback is called")
    }

    renderedCallback(){
        //console.log("renderedCallback is called")
    }

    disconnectedCallback(){
        //console.log("Component is done with what it was supposed to do")
    }

    errorcallback(){
        //console.log(stack + '---' + trace);
    }
}