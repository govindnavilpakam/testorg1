public with sharing class CaseController {

    //fetch 20 cases based on their createddate ascending order

    @AuraEnabled(cacheable=true)
    public static List<Case> getCasesInSequence() {
        return [SELECT Id,Origin,Subject,Priority,Reason FROM Case ORDER BY CreatedDate ASC LIMIT 20];
    }
}