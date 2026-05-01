import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    name = "Kevin"
    ageLeft = 11

    expectedAge;
    showMyAge(event){
        console.log("type of is: "+typeof (event.target))
        console.log("event.target is: "+event.target);
        console.log("event.target.value is: "+event.target.value)
        console.log("event.detail is: "+event.detail);
        console.log("event.detail.value is: "+event.detail.value)
        this.expectedAge = event.target.value
        //alert("You have "+this.expectedAge+" years left")
    }

    _handleAgeLeft = (this.ageLeft*365)

    get handleAgeLeft(){
        return this._handleAgeLeft;
    }

    set handleAgeLeft(value){
        this._handleAgeLeft=value<1000 ? value : 5000
    }

    handleInputAge(event){
        this.handleAgeLeft = event.target.value
    }

} 