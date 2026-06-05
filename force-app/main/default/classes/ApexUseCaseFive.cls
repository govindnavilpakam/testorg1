public with sharing class ApexUseCaseFive {
    public static Boolean  checkIfContactAccountCombinationExists(String accName,String conName) {

        List<Contact> conList = new List<Contact>();
        conList = [SELECT Id,Name,Account.Name from Contact WHERE Name = :conName AND Account.Name=:accName];
        if(conList.size()>0){
            return true;
        }
        return false;
    }
}