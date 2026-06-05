public with sharing class ApexUseCaseOne {
    public static void createNewContact(String firstName,String lastName,String email) {

        List<Contact> newConList = new List<Contact>();
        Contact newCon = new Contact();
        newCon.FirstName = firstName;
        newCon.LastName = lastName;
        newCon.Email = email;
        newConList.add(newCon); 
        if(newConList.size()==1){
            Database.insert(newConList);
        }


    }
}