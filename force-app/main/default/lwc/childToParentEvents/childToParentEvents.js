import { LightningElement } from 'lwc';

export default class ChildToParentEvents extends LightningElement {

    showFinalValue;
    eventReceieved = false;
    selectedProduct = {};
    timestamp;
    selectedBy = 'Unknown';
    handleProductSelection(event){
        const {selectedProduct,timestamp,selectedBy} = event.detail;
        this.selectedProduct = selectedProduct;
        this.timestamp = timestamp;
        this.selectedBy = selectedBy;
        this.eventReceieved = true;
    }
}