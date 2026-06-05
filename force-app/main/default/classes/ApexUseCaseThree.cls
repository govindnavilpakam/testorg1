public with sharing class ApexUseCaseThree {
    public static void sendEmail(String emailAddress) {

        if(!String.isBlank(emailAddress)){
            List<String> emailAddressList = new List<String>{emailAddress};
            
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setSubject('Dekh bhai aya message');
            mail.setPlainTextBody('Ye le padhle have a look. Thank you');
            mail.setToAddresses(emailAddressList);


            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
        }
    }
}