public class ToDoList {
    
    public static List<workItem> toDoListItems = new List<workItem>();
    
    public static void addItem(workItem toDoItem){
        toDoListItems.add(toDoItem);
    }
    
    public static List<ToDoList.workItem> itemList(){
        return toDoListItems;
    }
    
    public static void updateItem(Integer workId,String newstatus){
        for(ToDoList.workItem item:toDoListItems){
            if(item.wId==workId){
                item.status = newstatus;
            }
        }
    }

    
    public class workItem{
        public Integer wId;
        public String status;
    }
}