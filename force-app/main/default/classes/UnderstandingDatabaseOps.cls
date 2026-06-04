public class UnderstandingDatabaseOps {

    public static void handleAccountInserts(){
        Account acc1 = new Account();
        acc1.Name = 'Ole Jardon';
        Account acc2 = new Account();
    
        List<Account> accList = new List<Account>();
        accList.add(acc1);
        accList.add(acc2);
        
        List<Id> successfulId = new List<Id>();
        List<String> errorResponseList = new List<String>();
        
        List<Database.SaveResult> resArr = Database.insert(accList,false);
        for(Database.SaveResult savRes : resArr){
            if(savRes.isSuccess()){
                successfulId.add(savRes.getId());
            }
            else{
                for(Database.Error errorResponse : savRes.getErrors()){
                    errorResponseList.add(errorResponse.getFields()+'-'+errorResponse.getMessage());
                }
            }
        }
        
        System.debug('Success - '+successfulId);
		System.debug('Failed - '+errorResponseList);

    }
    
    public static void handleContactUpdate(Id contactId){
        List<Contact> con = [SELECT id,Title,Department from Contact WHERE id = :contactId];
        if(con.size()>0){
            if(con[0].Title == 'Dean of Administration'){
            	con[0].Department = 'Administration';    
            }
            
        }
        update con;
    }
}