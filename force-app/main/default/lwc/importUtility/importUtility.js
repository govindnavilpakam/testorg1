import { LightningElement } from 'lwc';
import MYLOGO from '@salesforce/resourceUrl/makes_sense';
import SHOWINPROD from '@salesforce/label/c.Show_in_Prod';
import USERINFO from '@salesforce/user/Id';
import hasPermission from '@salesforce/userPermission/ViewSetup';
import devinfo from '@salesforce/client/formFactor';
import LANG from '@salesforce/i18n/lang';
import LOCALE from '@salesforce/i18n/locale';

export default class ImportUtility extends LightningElement {
    src = MYLOGO;
    label = SHOWINPROD;
    userID = USERINFO;
    deviceInfo = devinfo;
    language = LANG;
    locale = LOCALE;
    
    get showInProd(){
        return this.label == "true"?true:false;
    }

    get hasPermission(){
        console.log("Does the user have permission: "+ hasPermission);
        return hasPermission;
    }
}