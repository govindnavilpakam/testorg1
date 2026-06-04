public class AllMyVariables {
    
    public Date today = Date.today();
    Integer num = 12;

    public Integer calculateMyAge(Date dateOfBirth){
		Integer Age = (dateOfBirth.monthsBetween((new AllMyVariables().today)))/12;
        Integer numOne = new AllMyVariables().num;
        return Age;
        
    }
}