import { LightningElement } from 'lwc';

export default class ParentChildLifecycleHooks extends LightningElement {
    constructor(){
        super();
        console.log("Parent - Constructor is called")
    }

    connectedCallback() {
        console.log("Parent - connectedCallback is called")
    }

    renderedCallback(){
        console.log("Parent - renderedCallback is called")
    }

    disconnectedCallback(){
        console.log("Parent - Component is done with what it was supposed to do")
    }

    errorcallback(){
        console.log(stack + '---' + trace);
    }
}