package com.restjersey;

import java.util.HashSet;
import java.util.Set;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResultModel {
	public Set<String> listOfProducts;

	public enum MType {
		SUCCESS, ERROR
	}

	public MType MessageType;

	public String Message;

	ResultModel() {
		listOfProducts = new HashSet<String>();
		Message = "Some kind of error occurred in your request";
		MessageType = MType.ERROR;

	}

	public Set<String> getListOfProducts() {
		return listOfProducts;
	}

	public void setListOfProducts(Set<String> listOfProducts) {
		this.listOfProducts = listOfProducts;
	}

	public MType getMessageType() {
		return MessageType;
	}

	public void setMessageType(MType messageType) {
		MessageType = messageType;
	}

	public String getMessage() {
		return Message;
	}

	public void setMessage(String message) {
		Message = message;
	}

}
