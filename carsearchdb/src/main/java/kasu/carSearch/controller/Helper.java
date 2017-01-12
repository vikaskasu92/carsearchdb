package kasu.carSearch.controller;

import java.util.LinkedHashMap;

import kasu.carSearch.model.SearchCategoryForm;

public class Helper {
	
	public LinkedHashMap<String, String> createMapOfSearchCategoryForm(SearchCategoryForm searchCategoryForm){
		
		LinkedHashMap<String, String> createmap = new LinkedHashMap<String, String>();
		createmap.put("brandNameSelection", searchCategoryForm.getBrandNameSelection());
		createmap.put("carType", searchCategoryForm.getCarType());
		createmap.put("searchCategory1", searchCategoryForm.getSearchCategory1());
		createmap.put("searchCategory2", searchCategoryForm.getSearchCategory2());
		createmap.put("searchCategory3", searchCategoryForm.getSearchCategory3());
		return createmap;
	}
	
public LinkedHashMap<String, Integer> createMapOfSearchCategoryFormInt(SearchCategoryForm searchCategoryForm){
		
		LinkedHashMap<String, Integer> createmap = new LinkedHashMap<String, Integer>();
		createmap.put("minRange1", searchCategoryForm.getMinRange1());
		createmap.put("minRange2", searchCategoryForm.getMinRange2());
		createmap.put("minRange3", searchCategoryForm.getMinRange3());
		createmap.put("minRange4", searchCategoryForm.getMinRange4());
		createmap.put("minRange5", searchCategoryForm.getMinRange5());
		createmap.put("minRange6", searchCategoryForm.getMinRange6());
		createmap.put("maxRange1", searchCategoryForm.getMaxRange1());
		createmap.put("maxRange2", searchCategoryForm.getMaxRange2());
		createmap.put("maxRange3", searchCategoryForm.getMaxRange3());
		createmap.put("maxRange4", searchCategoryForm.getMaxRange4());
		createmap.put("maxRange5", searchCategoryForm.getMaxRange5());
		createmap.put("maxRange6", searchCategoryForm.getMaxRange6());
		return createmap;
	}

}
