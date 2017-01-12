package kasu.carSearch.model;

import javax.persistence.Embeddable;

@Embeddable
public class EngineSpecification {
	
	private String displacement;
	private String engineType;
	private int brakeHorsePower;
	private String torque;
	private int milesPerGallonCity;
	private int milesPerGallonFreeWay;
	private String topSpeed;
	private String zeroToSixty;
	
	
	public String getZeroToSixty() {
		return zeroToSixty;
	}
	public void setZeroToSixty(String zeroToSixty) {
		this.zeroToSixty = zeroToSixty;
	}
	public String getDisplacement() {
		return displacement;
	}
	public void setDisplacement(String displacement) {
		this.displacement = displacement;
	}
	public String getEngineType() {
		return engineType;
	}
	public void setEngineType(String engineType) {
		this.engineType = engineType;
	}
	
	public int getBrakeHorsePower() {
		return brakeHorsePower;
	}
	public void setBrakeHorsePower(int brakeHorsePower) {
		this.brakeHorsePower = brakeHorsePower;
	}
	public String getTorque() {
		return torque;
	}
	public void setTorque(String torque) {
		this.torque = torque;
	}
	
	public int getMilesPerGallonCity() {
		return milesPerGallonCity;
	}
	public void setMilesPerGallonCity(int milesPerGallonCity) {
		this.milesPerGallonCity = milesPerGallonCity;
	}
	public int getMilesPerGallonFreeWay() {
		return milesPerGallonFreeWay;
	}
	public void setMilesPerGallonFreeWay(int milesPerGallonFreeWay) {
		this.milesPerGallonFreeWay = milesPerGallonFreeWay;
	}
	public String getTopSpeed() {
		return topSpeed;
	}
	public void setTopSpeed(String topSpeed) {
		this.topSpeed = topSpeed;
	}
	@Override
	public String toString() {
		return "EngineSpecification [displacement=" + displacement
				+ ", engineType=" + engineType + ", brakeHorsePower="
				+ brakeHorsePower + ", torque=" + torque
				+ ", milesPerGallonCity=" + milesPerGallonCity
				+ ", milesPerGallonFreeWay=" + milesPerGallonFreeWay
				+ ", topSpeed=" + topSpeed + ", zeroToSixty=" + zeroToSixty
				+ "]";
	}
		
}
