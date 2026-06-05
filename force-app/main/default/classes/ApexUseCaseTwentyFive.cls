public with sharing class ApexUseCaseTwentyFive {
    public static List<Case> returnMergerdList(String queue1,String queue2) {

        List<Case> mergedList = new List<Case>();
        List<Case> SLAList = [SELECT Id,Owner.Name FROM Case WHERE Owner.Name =:queue1];

        List<Case> EscalationList = [SELECT Id,Owner.Name FROM Case WHERE Owner.Name =:queue2];

        mergedList.addAll(SLAList);
        mergedList.addAll(EscalationList);
        return mergedList;

    }
}