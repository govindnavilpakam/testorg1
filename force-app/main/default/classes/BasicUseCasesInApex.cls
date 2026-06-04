public class BasicUseCasesInApex {
    
    public static String correctPassword = 'ABCDabcd#1';
    public static Integer attemptCount=0;
    
    public static Integer highest=0;
    
    public static void checkHighestAndLowest(Map <String,Integer> reportCard){
        
        String highestSub;
        for(String sub:reportCard.keySet()){
            
            if(reportCard.get(sub)>highest){
                highest=reportCard.get(sub);
                highestSub=sub;
            }
        }
        System.debug('Highest marks is in '+ highestSub+'with' + reportCard.get(highestSub));
    }
    
    public static Integer checkLearning(Map<string,Boolean> weekDays){
        Integer dayCount = 0;
        
        for(String week:weekDays.keySet()){
            Boolean yesOrNo = weekDays.get(week);
            if(yesOrNo){
                dayCount++;
            }
        }
        return dayCount;
    }
    
    public static void passwordAttempts(){
        String call = handlePassword('wncwjenwej');
        System.debug(call);
        String call2 = handlePassword('jj#1');
        System.debug(call2);
        String call3= handlePassword('wncwjenwej');
    	System.debug(call3);
        String call4= handlePassword('ABCDabc#1');
    	System.debug(call4);
        
            
    }
    
    public static String handlePassword(String inputPassword){
        
        
        if(attemptCount==3 && (correctPassword!=inputPassword)){
            return ('OUT OF ATTEMPTS');
        }
        if(correctPassword!=inputPassword){
            attemptCount++;
            //System.debug(attemptCount);
            return ('Wrong');
        }
        return ('SUCCESS');
        
        
        
    }

}