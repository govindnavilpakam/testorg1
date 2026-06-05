public with sharing class ApexUseCaseFour {
    public static void returnContactEmails(String accName) {
        List<Contact> contactList = new List<Contact>();
        List<String> emailAddress = new List<String>();
        contactList = [SELECT Id,Name,Email,Account.Name from Contact WHERE Account.Name = : accName];
        for(Contact con:contactList){
            emailAddress.add(con.Email);
        }
        System.debug(emailAddress);
    }
}