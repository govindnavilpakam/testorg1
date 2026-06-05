public with sharing class ApexUseCaseTwentyEight {
    public static Map<String,List<Case>> collectionOfCasesWithOrigin() {

    
        Map<String,List<Case>> finalList = new Map<String,List<Case>>();
        List<Case> webOrigin = [SELECT Id,Origin FROM Case WHERE Origin = 'Web'];
        finalList.put('Web', webOrigin);

        List<Case> phoneOrigin = [SELECT Id,Origin FROM Case WHERE Origin = 'Phone'];

    }
}