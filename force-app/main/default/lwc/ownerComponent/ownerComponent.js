import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
    productList = [
        {
            name: 'MacBook',
            price: 100,
            id: '1'
        },
        {
            name: 'iMac',
            price: 200,
            id: '3'
        },
        {
            name: 'iPhone',
            price: 300,
            id: '2'}
    ]

    callChildMethod(){
        console.log("Child has been called")
        this.template.querySelector('c-container-component').handleParent();
    }
}
