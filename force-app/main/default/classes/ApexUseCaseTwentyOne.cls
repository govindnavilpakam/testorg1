public with sharing class ApexUseCaseTwentyOne {
    public static Boolean checkDuplicateLeads(Lead leadObj) {

        List<Lead> leadList = [SELECT Id, Name, Email, LeadSource, Industry FROM Lead WHERE Name =: leadObj.Name  AND LeadSource=: leadObj.LeadSource AND Industry=:leadObj.Industry AND Email =: leadObj.Email];
        if(leadList.size()>1){
            return true;
        }
        return false;
    }
}