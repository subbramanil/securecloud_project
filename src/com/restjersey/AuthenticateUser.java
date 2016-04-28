package com.restjersey;

import java.util.HashMap;

public class AuthenticateUser {
	 HashMap<String,String> userList= new HashMap<String,String>();
	 HashMap<String,String> roleList= new HashMap<String,String>();
	
	 AuthenticateUser()
	 {
		 //Fill the User List
		 this.userList.put("swetalina", "swetalina");
		 this.userList.put("Subbu", "Subbu");
		 this.userList.put("Karthik", "Karthik"); 
		 //Give roles to user
		 this.roleList.put("swetalina", "public");
		 this.roleList.put("Subbu", "premium");
		 this.roleList.put("Karthik", "premium");
	 } 
	
	public HashMap<String,String> GetUserList(){	
		return userList;
	}
	
	public String GetUserRole(String userName){
		return roleList.get(userName);
}
}
