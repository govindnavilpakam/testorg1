import { LightningElement,api } from 'lwc';

export default class ContainerComponent extends LightningElement {
    @api productsFound = false;
    @api productList;
    parentCalled=false;

    get hasProduct(){
        return this.productsFound == "true" ? true : false;
    }

    @api handleParent(){
        this.parentCalled = true;
    }
}