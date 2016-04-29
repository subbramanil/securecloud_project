package com.restjersey;

//Imports:
import javax.ws.rs.QueryParam;

import com.ecommerce.EcommerceAccessController;
import com.google.gson.Gson;
import com.restjersey.AuthenticateUser;
import com.restjersey.ResultModel.MType;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

//To run sample path: http://localhost:8080/demoREST/rest/authenticate?userName=Karthik&password=Karthik
//Sets the path to base URL + /authenticate
@Path("/authenticate")
public class CtoFService {

	// Takes input Username and password:
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String postOnlyXML(@QueryParam("userName") String name,
			@QueryParam("password") String pass) {
		ResultModel result = new ResultModel();
		String role = "";
		Gson gson = new Gson();

		try {
			System.out.println("incomingXML :" + AuthenticateUser(name, pass));
			AuthenticateUser au = new AuthenticateUser();
			if (AuthenticateUser(name, pass)) {
				role = au.GetUserRole(name);
			} else {
				throw new Exception("User not authenticated");
			}
			// Call API and pass these parameters:

			// result.listOfProducts= MockApiCall(role,
			// Category.GetListofCategory());
			result.setListOfProducts(EcommerceAccessController
					.getPermittedCategories(role, Category.GetListofCategory()));
			System.out.println(result.getMessage());
			result.setMessage("SuccessFully completed task");
			result.setMessageType(MType.SUCCESS);
			System.out.println(result);
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMessage("" + ex);
			result.setMessageType(MType.ERROR);
		}
		return gson.toJson(result, ResultModel.class);
	}

	public boolean AuthenticateUser(String userName, String password) {
		AuthenticateUser au = new AuthenticateUser();
		HashMap<String, String> list = au.GetUserList();
		if (list.containsKey(userName)) {
			if (list.get(userName).equals(password)) {
				return true;
			} else
				return false;
		} else
			return false;
	}

	private Set<String> MockApiCall(String role, Set<String> getListofCategory) {
		return getListofCategory;

	}
}
