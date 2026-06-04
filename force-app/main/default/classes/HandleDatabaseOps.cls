public class HandleDatabaseOps {

    public static void createAcc(){
        Account acc = new Account();
        acc.Name = 'Daisy Hyb';
        insert acc;
    }
    
    public static void createTaskAndLinkWithAccount(String accName){
        List<Account> acc = [SELECT Id,Name from Account WHERE Name =: accName];
        Task tas = new Task();
        tas.Subject = 'Follow Up';
        tas.Priority = 'Not Started';
        tas.Status = 'Normal';
        if(acc.size()==1){
        	tas.WhatId = acc[0].Id;    //linking task to account
        }
        insert tas;
    }
    
    public static void createTaskForServiceRep(String contactName){
        List<Contact> con = [SELECT Id from Contact WHERE Name =: contactName];
		Task toBeLinked = new Task();
        toBeLinked.Subject = 'Follow Up';
        toBeLinked.Priority = 'Not Started';
        toBeLinked.Status = 'Normal';
        if(con.size()==1){
        	toBeLinked.WhoId = con[0].Id;    //linking task to contact
        }
        Database.insert(toBeLinked);
        
    }
    
    public static void handleCaseFieldUpdates(String caseRecordId){
        List<Case> caseRecord = [SELECT Id from Case WHERE Id =: caseRecordId];
        if(caseRecord.size()==1){
            caseRecord[0].Priority = 'Medium';
        }
        update caseRecord;
    }
    
    public static void handleCaseStatusUpdate(String caseStatus){
        List<Case> toBeUpdated = [SELECT Id,CaseNumber from Case WHERE Status =: caseStatus];
        for(Case eachCase:toBeUpdated){
            eachCase.Status = 'Closed';
        }
        Database.update(toBeUpdated,false);
        
    }
    
    public static void handleInsertAndUpdateAccount(){
        List<Account> accToUpdate = new List<Account>();
        Account acc1 = new Account();
        acc1.Name = 'First to Insert';
        Account acc2 = new Account();
        acc2.Name = 'Second to Insert';
        accToUpdate.add(acc1);
        accToUpdate.add(acc2);
        
        List<Account> accList = [SELECT Id,Rating FROM Account WHERE AccountNumber!=null];
        for(Account acc:accList){
            acc.Rating = 'Hot';
            accToUpdate.add(acc);
        }

        upsert accToUpdate;
        
    }
    
    public static void handleOpportunityDeletion(String stageName) {
		List<Opportunity> oppListToDelete = [SELECT Id FROM Opportunity WHERE StageName = :stageName];
			if(oppListToDelete.size() > 0){
				Database.delete(oppListToDelete, false);
            }
    }
    
    public static void handleUndeleteOpportunity(){
        List<Opportunity> toUndelete = [SELECT id,StageName,isDeleted from Opportunity WHERE LastModifiedDate=today AND isDeleted=true ALL ROWS];
        if(toUndelete.size()>0){
            undelete toUndelete;
        }
    }

    
    
}