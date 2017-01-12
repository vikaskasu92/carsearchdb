package kasu.carSearch.model;

import javax.persistence.Embeddable;

@Embeddable
public class DriveTrainDetails {
	
	private String valveTrain;
	private String transmission;
	private String driveTrainType;
	private String compressionRatio;
	
	public String getValveTrain() {
		return valveTrain;
	}
	public void setValveTrain(String valveTrain) {
		this.valveTrain = valveTrain;
	}
	public String getTransmission() {
		return transmission;
	}
	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}
	public String getDriveTrainType() {
		return driveTrainType;
	}
	public void setDriveTrainType(String driveTrainType) {
		this.driveTrainType = driveTrainType;
	}
	public String getCompressionRatio() {
		return compressionRatio;
	}
	public void setCompressionRatio(String compressionRatio) {
		this.compressionRatio = compressionRatio;
	}
	@Override
	public String toString() {
		return "DriveTrainDetails [valveTrain=" + valveTrain
				+ ", transmission=" + transmission + ", driveTrainType="
				+ driveTrainType + ", compressionRatio=" + compressionRatio
				+ "]";
	}

	
}
