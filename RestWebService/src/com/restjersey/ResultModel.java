package com.restjersey;

import java.util.HashSet;
import java.util.Set;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResultModel {
	private Set<String> listOfProducts;

	public enum MType {
		SUCCESS, ERROR
	}

	private MType MessageType;

	private String Message;

	ResultModel() {
		listOfProducts = new HashSet<String>();
		Message = "No Error";
		MessageType = MType.ERROR;

	}

	public Set<String> getListOfProducts() {
		return listOfProducts;
	}

	public void setListOfProducts(Set<String> m_listOfProducts) {
		this.listOfProducts = m_listOfProducts;
	}

	public MType getMessageType() {
		return MessageType;
	}

	public void setMessageType(MType m_messageType) {
		MessageType = m_messageType;
	}

	public String getMessage() {
		return Message;
	}

	public void setMessage(String m_message) {
		Message = m_message;
	}
	
	@Override
	public String toString() {		
		return "listOfProducts:" + listOfProducts + "\n"
				+ "Message:" + Message + "\n"
				+ "MessageType:" + MessageType + "\n";
	}

}
