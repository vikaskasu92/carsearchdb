package kasu.carSearch.DAO;

import java.util.LinkedHashMap;
import java.util.List;

import kasu.carSearch.model.CarDetails;
import kasu.carSearch.model.UserData;

public interface OperationsDAO {

	public void save(CarDetails carDetails);
	public void save(UserData user);
	public List<UserData> verifyAuthentication(String username);
	public List<CarDetails> retrieveData();
	public List<CarDetails> retrieveCustomSearch(LinkedHashMap<String,String> searchCategoryForm, LinkedHashMap<String,Integer> searchCategoryFormInt, Integer pageNo);
	public Long retrieveCustomSearch(LinkedHashMap<String,String> searchCategoryForm, LinkedHashMap<String,Integer> searchCategoryFormInt);
	
}
