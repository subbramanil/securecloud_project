package com.restjersey;

import java.util.HashSet;
import java.util.Set;

public class Category {
	
	public static Set<String> GetListofCategory(){
		Set<String> categoryList= new HashSet<String>();
		categoryList.add("Books");
		categoryList.add("Stationary");
		categoryList.add("Furniture");
		categoryList.add("Real Estate");
		categoryList.add("Medicines");
		return categoryList;	
	}

}
