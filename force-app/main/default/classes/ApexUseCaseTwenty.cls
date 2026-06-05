public with sharing class ApexUseCaseTwenty {
    public static loginDetailWrapper getUserLoginInfo() {
        loginDetailWrapper wrapper = new loginDetailWrapper();
        wrapper.localeInfo = UserInfo.getLocale();
        wrapper.timezoneInfo = String.valueOf(UserInfo.getTimeZone());
        String userId = UserInfo.getUserId();
        List<User> userRecord = [SELECT Id,LastLoginDate FROM User WHERE Id = :userId];
        if(userRecord.size() > 0){
            wrapper.LastLogin = userRecord[0].LastLoginDate;
        }
        
        //System.debug('Locale: ' + localeInfo + ', Timezone: ' + timezoneInfo + ', LastLogin: ' + LastLogin);
        return wrapper;

        
    }

    public class loginDetailWrapper{
        public String localeInfo;
        public String timezoneInfo;
        public DateTime lastLogin;
    }
}