public with sharing class ApexUseCaseTwentyThree {
    public static void assignCaseBasedOnCriteria(Case caseRecord) {

        if(caseRecord!=null){
            if(caseRecord.Priority=='High' && caseRecord.Origin=='Web'){
                List<Group> mySLAQueue = [SELECT Id, Name, Type, DeveloperName FROM Group  WHERE DeveloperName ='SLA_Queue' AND Type='Queue'];
                if (mySLAQueue.size()>0) {
                    caseRecord.OwnerId = mySLAQueue[0].Id;
                    update caseRecord;
                }
            }
        }
    }
}