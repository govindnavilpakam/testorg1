import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {

    selectedProduct = {};
    activeProduct = 'Budweiser';
    handleFiringEvent(){
        this.selectedProduct = {id:1, name:'Jack Daniels'};

        const event = new CustomEvent('sendproductselected',{
        detail : {
            selectedProduct: this.selectedProduct,
            timestamp : new Date().toISOString(),
            selectedBy : 'Govind'
            
        }
    });

    this.dispatchEvent(event);
    }

    
}