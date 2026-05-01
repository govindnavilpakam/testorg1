import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {
    constructor(){
        super();
        console.log("Child - Constructor is called")
    }

    connectedCallback() {
        console.log("Child - connectedCallback is called")
    }

    renderedCallback(){
        console.log("Child - renderedCallback is called")
    }

    disconnectedCallback(){
        console.log("Child - Component is done with what it was supposed to do")
    }

    errorcallback(){
        console.log(stack + '---' + trace);
    }
}