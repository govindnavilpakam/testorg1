import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationPossibilities extends NavigationMixin(LightningElement) {

    navigateToRecordPage(){
        //we want to navigate to record page

        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'001WU00001wjyHSYAY',
                objectApiName:'Account',
                actionName:'view'
            }
        })
    }

    navigateToWeb(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url : 'https://www.youtube.com/@fern-tv'
            }
        })

    }

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Dice_Roll__c',
               
            }
        })

    
    }

    navigateToView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectAPIName:'Account',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })


    }
}
