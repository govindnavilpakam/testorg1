public with sharing class DependentWireController {

    @AuraEnabled(cacheable = true)
    public static List<Task> fetchTasksForAccount(String accountName){
        try {
            return [SELECT Id,ActivityDate,Subject,Description,What.Name from TASK WHERE What.Name =: accountName];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}