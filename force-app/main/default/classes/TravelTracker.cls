public class TravelTracker {
    
    public static Map<Integer,List<String>> placesVisited = new Map<Integer,List<String>>();
    public static List<String> wishlist;
    public static List<String> allCountryList = new List<String>();
    
    public static Map<Integer,List<String>> captureLocations(String country,Integer year){

        
        if(placesVisited.containsKey(year)){
            List<string> currentList = placesVisited.get(year);
            currentList.add(country);
            placesVisited.put(year,currentList);
            allCountryList.add(country);
        }
        else{
            placesVisited.put(year,new List<String>{country});
            allCountryList.add(country);
        }
        return placesVisited;
    }
    
    public static List<String> wishlistTracker(String country){
        
        //List<String> newCountry = new List<String>();
        //newCountry.add(country);
        if(wishlist==null){
            wishlist = new List<String>{country};
        }
        else{
            wishlist.add(country);
        }
        return wishlist;
    }
    
    public static Map<String,Integer> countryCount(){
        Map<String,Integer> countryMap = new Map<String,Integer>();
        System.debug(allCountryList);
        for (String country : allCountryList) {
    	if (countryMap.containsKey(country)) {
        // Increment count if key exists
        	countryMap.put(country, countryMap.get(country) + 1);
    	} else {
        	// Initialize count if first time seeing the string
        	countryMap.put(country, 1);
    	}
}
        return countryMap;
    }
}