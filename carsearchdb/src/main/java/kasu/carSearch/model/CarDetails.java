package kasu.carSearch.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="carsearchenginedb")
public class CarDetails {
	
	@Id @GeneratedValue (strategy=GenerationType.AUTO)
	private int carId;
	private String carType;
	private int modelYear;
	private String brandName;
	private String carName;
	private int price;
	@Embedded
	private Chassis chassis;
	@Embedded
	private EngineSpecification engineSpecification;
	@Embedded
	private DriveTrainDetails driveTrainDetails;
	public int getCarId() {
		return carId;
	}
	public void setCarId(int carId) {
		this.carId = carId;
	}
	public String getCarType() {
		return carType;
	}
	public void setCarType(String carType) {
		this.carType = carType;
	}
	public int getModelYear() {
		return modelYear;
	}
	public void setModelYear(int modelYear) {
		this.modelYear = modelYear;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public String getCarName() {
		return carName;
	}
	public void setCarName(String carName) {
		this.carName = carName;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Chassis getChassis() {
		return chassis;
	}
	public void setChassis(Chassis chassis) {
		this.chassis = chassis;
	}
	public EngineSpecification getEngineSpecification() {
		return engineSpecification;
	}
	public void setEngineSpecification(EngineSpecification engineSpecification) {
		this.engineSpecification = engineSpecification;
	}
	public DriveTrainDetails getDriveTrainDetails() {
		return driveTrainDetails;
	}
	public void setDriveTrainDetails(DriveTrainDetails driveTrainDetails) {
		this.driveTrainDetails = driveTrainDetails;
	}
	@Override
	public String toString() {
		return "CarDetails [carId=" + carId + ", carType=" + carType
				+ ", modelYear=" + modelYear + ", brandName=" + brandName
				+ ", carName=" + carName + ", price=" + price + ", chassis="
				+ chassis + ", engineSpecification=" + engineSpecification
				+ ", driveTrainDetails=" + driveTrainDetails + "]";
	}

	
}
