public with sharing class IndependentWireController {

    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(){
        return [SELECT Id,Origin,Subject,Description from CASE LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks(){
        return [SELECT Id,ActivityDate,Subject,Description from TASK LIMIT 5];
    }
}