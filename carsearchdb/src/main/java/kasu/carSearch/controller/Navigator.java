package kasu.carSearch.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import kasu.carSearch.DAO.OperationsDAOImpl;
import kasu.carSearch.model.CarDetails;
import kasu.carSearch.model.SearchCategoryForm;
import kasu.carSearch.model.UserData;

@Controller
public class Navigator {

	private static final String DEFAULT_ERROR_VIEW = "technicalError";
	private static final String ADMIN_PAGE = "launchAdmin";
	private static final String MAIN_PAGE = "mainlaunch";
	private static final String LAUNCH_DECIDER = "launchDecider";
	private static final String ADMIN_DATA_RETRIEVE = "adminDataRetrieve";
	private static final String CUSTOM_SEARCH_OPERATION = "customSearchOperation";

	private static final Logger LOGGER = Logger.getLogger(Thread.currentThread().getStackTrace()[0].getClassName());

	@ModelAttribute
	public void commonObjects(Model model){
		model.addAttribute("launchPageHeading", "Enter the following Car Details to save to the Database");
		model.addAttribute("multipleRetrieve", false);
		model.addAttribute("completeListIsEmpty", false);
	}
	
	@RequestMapping(value="/mainlaunch")
	public ModelAndView mainLaunch(){
		ModelAndView model = new ModelAndView(MAIN_PAGE);
		return model;
	}

	@RequestMapping(value={"", "/", "/launch"})
	public ModelAndView launchDecider(){
		ModelAndView model = new ModelAndView(LAUNCH_DECIDER);
		return model;

	}
	
	@RequestMapping(value="/openAdmin")
	public ModelAndView openAdmin(){
		ModelAndView model = new ModelAndView(ADMIN_PAGE);
		model.addObject("userAuthenticated", true);
		return model;

	}
	
	
	@RequestMapping(value="/authentication", method=RequestMethod.POST)
	public ModelAndView authenticationAdmin(@ModelAttribute("user") UserData user){
		ModelAndView model = new ModelAndView(ADMIN_PAGE);
		OperationsDAOImpl operationsDAO = new OperationsDAOImpl();
		if(user.getUsername().equals("vikaskasu")){
			List<UserData> userdata = operationsDAO.verifyAuthentication(user.getUsername());
			String password = userdata.get(0).getPassword().toString();
			if(password.equals(user.getPassword())){
				model.addObject("userAuthenticated", true);
			}else{
				model.addObject("userAuthenticated", false);
			}
		}else{
			model.addObject("userAuthenticated", false);
		}
		return model;
	};
	
	@RequestMapping(value="/createAdmin", method=RequestMethod.POST)
	public ModelAndView createAdmin(@ModelAttribute("user") UserData user){
		ModelAndView model = new ModelAndView(ADMIN_PAGE);
		OperationsDAOImpl operationsDAO = new OperationsDAOImpl();
		operationsDAO.save(user);
		return model;
	}
	


	@RequestMapping(value="/saveAdmin", method=RequestMethod.POST)
	public ModelAndView saveDetails(@ModelAttribute("carDetails") CarDetails carDetails){
		OperationsDAOImpl operationsDAO = new OperationsDAOImpl();
		operationsDAO.save(carDetails);
		ModelAndView model = new ModelAndView(ADMIN_PAGE);
		model.addObject("userAuthenticated", true);
		return model;
	}

	@RequestMapping(value="/listOperationAdmin", method=RequestMethod.GET)
	public ModelAndView retrieveMultipleTransaction(@ModelAttribute("carDetails") CarDetails carDetails){
		OperationsDAOImpl operationsDAO = new OperationsDAOImpl();
		List<CarDetails> completeList =  operationsDAO.retrieveData();
		ModelAndView model = new ModelAndView(ADMIN_DATA_RETRIEVE);
		model.addObject("completeList", completeList);		
		return model;
	}

	@RequestMapping(value="/customSearch", method=RequestMethod.POST)
	public ModelAndView customSearchForm(@ModelAttribute("searchCategoryForm") SearchCategoryForm searchCategoryForm){
		Helper helper = new Helper();
		LinkedHashMap<String,String> searchCategoryFormDetailsMap = (LinkedHashMap<String, String>) helper.createMapOfSearchCategoryForm(searchCategoryForm);
		LinkedHashMap<String,Integer> searchCategoryFormDetailsIntegerMap = (LinkedHashMap<String, Integer>) helper.createMapOfSearchCategoryFormInt(searchCategoryForm);
		OperationsDAOImpl operationsDAO = new OperationsDAOImpl();
		Long rowCount = operationsDAO.retrieveCustomSearch(searchCategoryFormDetailsMap, searchCategoryFormDetailsIntegerMap);
		Long totalPages = (long) Math.ceil(rowCount/4.0);
		List<CarDetails> uniqueList =operationsDAO.retrieveCustomSearch(searchCategoryFormDetailsMap, searchCategoryFormDetailsIntegerMap, 1);
		ModelAndView model = new ModelAndView(CUSTOM_SEARCH_OPERATION);
		if(CollectionUtils.isEmpty(uniqueList)){
			model.addObject("nonEmptyList",false);
		}else{
			model.addObject("nonEmptyList",true);
		}
		model.addObject("uniqueList",uniqueList);
		model.addObject("totalPages",totalPages);
		return model;
	};

	@RequestMapping(value="/pageResult", method=RequestMethod.POST)
	public ModelAndView customSearchFormBackwardPage(@ModelAttribute("searchCategoryForm") SearchCategoryForm searchCategoryForm, HttpServletRequest request ){
		Helper helper = new Helper();
		LinkedHashMap<String,String> searchCategoryFormDetailsMap = (LinkedHashMap<String, String>) helper.createMapOfSearchCategoryForm(searchCategoryForm);
		LinkedHashMap<String,Integer> searchCategoryFormDetailsIntegerMap = (LinkedHashMap<String, Integer>) helper.createMapOfSearchCategoryFormInt(searchCategoryForm);
		int currentPageNo = (Integer.parseInt(request.getParameter("pageNo")));
		List<CarDetails> uniqueList = new ArrayList<CarDetails>();
		ModelAndView model = new ModelAndView(CUSTOM_SEARCH_OPERATION);
		OperationsDAOImpl operationsDAO = new OperationsDAOImpl();
		uniqueList =operationsDAO.retrieveCustomSearch(searchCategoryFormDetailsMap, searchCategoryFormDetailsIntegerMap, currentPageNo);
		model.addObject("nonEmptyList",true);
		if(CollectionUtils.isEmpty(uniqueList)){
			model.addObject("nonEmptyList",false);
		}else{
			model.addObject("nonEmptyList",true);
		}
		model.addObject("uniqueList",uniqueList);
		return model;
	};


	@RequestMapping(value="/technicalError")
	@ExceptionHandler(value = {Exception.class, RuntimeException.class})
	public ModelAndView defaultErrorHandler(HttpServletRequest request, Exception e) {
		ModelAndView model = new ModelAndView(DEFAULT_ERROR_VIEW);
		model.addObject("webException", false);
		model.addObject("datetime", new Date());
		model.addObject("exception", e);
		model.addObject("url", request.getRequestURL());
		return model;
	}

}
