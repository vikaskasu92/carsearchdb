package kasu.carSearch.model;

import javax.persistence.Embeddable;

@Embeddable
public class Chassis {

	private String suspension;
	private String steering;
	private String wheelsAvailable;
	private String carLength;
	private String carWidth;
	private String wheelBase;
	
	public String getSuspension() {
		return suspension;
	}
	public void setSuspension(String suspension) {
		this.suspension = suspension;
	}
	public String getSteering() {
		return steering;
	}
	public void setSteering(String steering) {
		this.steering = steering;
	}
	public String getWheelsAvailable() {
		return wheelsAvailable;
	}
	public void setWheelsAvailable(String wheelsAvailable) {
		this.wheelsAvailable = wheelsAvailable;
	}
	public String getCarLength() {
		return carLength;
	}
	public void setCarLength(String carLength) {
		this.carLength = carLength;
	}
	public String getCarWidth() {
		return carWidth;
	}
	public void setCarWidth(String carWidth) {
		this.carWidth = carWidth;
	}
	public String getWheelBase() {
		return wheelBase;
	}
	public void setWheelBase(String wheelBase) {
		this.wheelBase = wheelBase;
	}
	@Override
	public String toString() {
		return "Chassis [suspension=" + suspension + ", steering=" + steering
				+ ", wheelsAvailable=" + wheelsAvailable + ", carLength="
				+ carLength + ", carWidth=" + carWidth + ", wheelBase="
				+ wheelBase + "]";
	}
	
	
}
