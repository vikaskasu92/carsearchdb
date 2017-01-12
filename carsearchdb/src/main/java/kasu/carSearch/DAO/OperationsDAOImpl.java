package kasu.carSearch.DAO;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.logging.Logger;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.engine.jdbc.connections.spi.ConnectionProvider;
import org.hibernate.internal.SessionFactoryImpl;

import kasu.carSearch.model.CarDetails;
import kasu.carSearch.model.UserData;

public class OperationsDAOImpl implements OperationsDAO{

	private static final Logger LOGGER = Logger.getLogger(Thread.currentThread().getStackTrace()[0].getClassName());


	@SuppressWarnings("deprecation")
	@Override
	public void save(CarDetails carDetails) {
		Session session = HibernateContext.getSessionFactory().openSession();
		session.beginTransaction();
		try{		
			session.save(carDetails);
			session.getTransaction().commit();
		}catch(Exception e){
			LOGGER.warning("saving the data has caused the following exception : "+ e);
			session.getTransaction().rollback();
		}finally{
			session.close();
		}
	}
	

	@Override
	public void save(UserData user) {
		Session session = HibernateContext.getSessionFactory().openSession();
		session.beginTransaction();
		try{		
			session.save(user);
			session.getTransaction().commit();
		}catch(Exception e){
			LOGGER.warning("saving the data has caused the following exception : "+ e);
			session.getTransaction().rollback();
		}finally{
			session.close();
		}
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<CarDetails> retrieveData() {
		Session session = HibernateContext.getSessionFactory().openSession();
		session.beginTransaction();
		List<CarDetails> completeList = new ArrayList<CarDetails>();
		try{
			completeList = session.createCriteria(CarDetails.class).list();
		}catch(Exception e){
			LOGGER.warning("retrieving the data has caused the following problem : "+ e);
		}finally{
			session.close();
		}
		return completeList;
	}

	@Override
	public List<UserData> verifyAuthentication(String username) {
		Session session = HibernateContext.getSessionFactory().openSession();
		session.beginTransaction();
		Criteria criteria = session.createCriteria(UserData.class);
		criteria.add(Restrictions.eq("username", username));
		@SuppressWarnings("unchecked")
		List<UserData> userData = criteria.list();
		return userData;
	}
	
	@Override
	public Long retrieveCustomSearch(LinkedHashMap<String,String> searchCategoryForm, LinkedHashMap<String,Integer> searchCategoryFormInt) {
		int minValueCategory1 =0;
		int maxValueCategory1 =0;
		int minValueCategory2 =0;
		int maxValueCategory2 =0;
		int minValueCategory3 =0;
		int maxValueCategory3 =0;
		String brandName  = searchCategoryForm.get("brandNameSelection");
		String carType  = searchCategoryForm.get("carType");
		String searchCategory1 = searchCategoryForm.get("searchCategory1");
		String searchCategory2 = searchCategoryForm.get("searchCategory2");
		String searchCategory3 = searchCategoryForm.get("searchCategory3");
		if(searchCategoryFormInt.get("minRange1") == 0){
			minValueCategory1 = searchCategoryFormInt.get("minRange2");
			maxValueCategory1=  searchCategoryFormInt.get("maxRange2");
		}else{
			minValueCategory1 = searchCategoryFormInt.get("minRange1");
			maxValueCategory1 = searchCategoryFormInt.get("maxRange1");
		}
		if(searchCategoryFormInt.get("minRange3") == 0){
			minValueCategory2 = searchCategoryFormInt.get("minRange4");
			maxValueCategory2=  searchCategoryFormInt.get("maxRange4");
		}else{
			minValueCategory2 = searchCategoryFormInt.get("minRange3");
			maxValueCategory2 = searchCategoryFormInt.get("maxRange3");
		}
		if(searchCategoryFormInt.get("minRange5") == 0){
			minValueCategory3 = searchCategoryFormInt.get("minRange6");
			maxValueCategory3=  searchCategoryFormInt.get("maxRange6");
		}else{
			minValueCategory3 = searchCategoryFormInt.get("minRange5");
			maxValueCategory3 = searchCategoryFormInt.get("maxRange5");
		}
		
		Session session = HibernateContext.getSessionFactory().openSession();
		Criteria criteria = session.createCriteria(CarDetails.class);
		criteria.add(Restrictions.eq("brandName", brandName));
		criteria.add(Restrictions.eq("carType", carType));
		if(searchCategory1.contains("Horse") && (minValueCategory1 != 0) && (maxValueCategory1 != 0)){
			criteria.add(Restrictions.ge("engineSpecification.brakeHorsePower", minValueCategory1));
			criteria.add(Restrictions.lt("engineSpecification.brakeHorsePower", maxValueCategory1));
		}else if(searchCategory1.contains("Price") && (minValueCategory1 != 0) && (maxValueCategory1 != 0)){
			criteria.add(Restrictions.ge("price", minValueCategory1));
			criteria.add(Restrictions.lt("price", maxValueCategory1));
		}else if(searchCategory1.contains("milesPerGallonCity") && (minValueCategory1 != 0) && (maxValueCategory1 != 0)){
			criteria.add(Restrictions.ge("milesPerGallonCity", minValueCategory1));
			criteria.add(Restrictions.lt("milesPerGallonCity", maxValueCategory1));
		}
		if(searchCategory2.contains("Horse") && (minValueCategory2 != 0) && (maxValueCategory2 != 0)){
			criteria.add(Restrictions.ge("engineSpecification.brakeHorsePower", minValueCategory2));
			criteria.add(Restrictions.lt("engineSpecification.brakeHorsePower", maxValueCategory2));
		}else if(searchCategory2.contains("Price") && (minValueCategory2 != 0) && (maxValueCategory2 != 0)){
			criteria.add(Restrictions. ge("price", minValueCategory2));
			criteria.add(Restrictions.lt("price", maxValueCategory2));
		}else if(searchCategory2.contains("milesPerGallonCity") && (minValueCategory2 != 0) && (maxValueCategory2 != 0)){
			criteria.add(Restrictions.ge("milesPerGallonCity", minValueCategory2));
			criteria.add(Restrictions.lt("milesPerGallonCity", maxValueCategory2));
		}
		if(searchCategory3.contains("Horse") && (minValueCategory3 != 0) && (maxValueCategory3 != 0)){
			criteria.add(Restrictions.ge("engineSpecification.brakeHorsePower", minValueCategory3));
			criteria.add(Restrictions.lt("engineSpecification.brakeHorsePower", maxValueCategory3));
		}else if(searchCategory3.contains("Price") && (minValueCategory3 != 0) && (maxValueCategory3 != 0)){
			criteria.add(Restrictions.ge("price", minValueCategory3));
			criteria.add(Restrictions.lt("price", maxValueCategory3));
		}else if(searchCategory3.contains("milesPerGallonCity") && (minValueCategory3 != 0) && (maxValueCategory3 != 0)){
			criteria.add(Restrictions.ge("milesPerGallonCity", minValueCategory3));
			criteria.add(Restrictions.lt("milesPerGallonCity", maxValueCategory3));
		}
		
		criteria.setProjection(Projections.rowCount());
		session.beginTransaction();
		@SuppressWarnings("unchecked")
		Long count = (Long) criteria.uniqueResult();
		session.close();
		return count;
	}

	@Override
	public List<CarDetails> retrieveCustomSearch(LinkedHashMap<String,String> searchCategoryForm, LinkedHashMap<String,Integer> searchCategoryFormInt, Integer pageNo) {
		int minValueCategory1 =0;
		int maxValueCategory1 =0;
		int minValueCategory2 =0;
		int maxValueCategory2 =0;
		int minValueCategory3 =0;
		int maxValueCategory3 =0;
		String brandName  = searchCategoryForm.get("brandNameSelection");
		String carType  = searchCategoryForm.get("carType");
		String searchCategory1 = searchCategoryForm.get("searchCategory1");
		String searchCategory2 = searchCategoryForm.get("searchCategory2");
		String searchCategory3 = searchCategoryForm.get("searchCategory3");
		if(searchCategoryFormInt.get("minRange1") == 0){
			minValueCategory1 = searchCategoryFormInt.get("minRange2");
			maxValueCategory1=  searchCategoryFormInt.get("maxRange2");
		}else{
			minValueCategory1 = searchCategoryFormInt.get("minRange1");
			maxValueCategory1 = searchCategoryFormInt.get("maxRange1");
		}
		if(searchCategoryFormInt.get("minRange3") == 0){
			minValueCategory2 = searchCategoryFormInt.get("minRange4");
			maxValueCategory2=  searchCategoryFormInt.get("maxRange4");
		}else{
			minValueCategory2 = searchCategoryFormInt.get("minRange3");
			maxValueCategory2 = searchCategoryFormInt.get("maxRange3");
		}
		if(searchCategoryFormInt.get("minRange5") == 0){
			minValueCategory3 = searchCategoryFormInt.get("minRange6");
			maxValueCategory3=  searchCategoryFormInt.get("maxRange6");
		}else{
			minValueCategory3 = searchCategoryFormInt.get("minRange5");
			maxValueCategory3 = searchCategoryFormInt.get("maxRange5");
		}
		
		Session session = HibernateContext.getSessionFactory().openSession();
		Criteria criteria = session.createCriteria(CarDetails.class);
		criteria.add(Restrictions.eq("brandName", brandName));
		criteria.add(Restrictions.eq("carType", carType));
		if(searchCategory1.contains("Horse") && (minValueCategory1 != 0) && (maxValueCategory1 != 0)){
			criteria.add(Restrictions.ge("engineSpecification.brakeHorsePower", minValueCategory1));
			criteria.add(Restrictions.lt("engineSpecification.brakeHorsePower", maxValueCategory1));
		}else if(searchCategory1.contains("Price") && (minValueCategory1 != 0) && (maxValueCategory1 != 0)){
			criteria.add(Restrictions.ge("price", minValueCategory1));
			criteria.add(Restrictions.lt("price", maxValueCategory1));
		}else if(searchCategory1.contains("milesPerGallonCity") && (minValueCategory1 != 0) && (maxValueCategory1 != 0)){
			criteria.add(Restrictions.ge("milesPerGallonCity", minValueCategory1));
			criteria.add(Restrictions.lt("milesPerGallonCity", maxValueCategory1));
		}
		if(searchCategory2.contains("Horse") && (minValueCategory2 != 0) && (maxValueCategory2 != 0)){
			criteria.add(Restrictions.ge("engineSpecification.brakeHorsePower", minValueCategory2));
			criteria.add(Restrictions.lt("engineSpecification.brakeHorsePower", maxValueCategory2));
		}else if(searchCategory2.contains("Price") && (minValueCategory2 != 0) && (maxValueCategory2 != 0)){
			criteria.add(Restrictions. ge("price", minValueCategory2));
			criteria.add(Restrictions.lt("price", maxValueCategory2));
		}else if(searchCategory2.contains("milesPerGallonCity") && (minValueCategory2 != 0) && (maxValueCategory2 != 0)){
			criteria.add(Restrictions.ge("milesPerGallonCity", minValueCategory2));
			criteria.add(Restrictions.lt("milesPerGallonCity", maxValueCategory2));
		}
		if(searchCategory3.contains("Horse") && (minValueCategory3 != 0) && (maxValueCategory3 != 0)){
			criteria.add(Restrictions.ge("engineSpecification.brakeHorsePower", minValueCategory3));
			criteria.add(Restrictions.lt("engineSpecification.brakeHorsePower", maxValueCategory3));
		}else if(searchCategory3.contains("Price") && (minValueCategory3 != 0) && (maxValueCategory3 != 0)){
			criteria.add(Restrictions.ge("price", minValueCategory3));
			criteria.add(Restrictions.lt("price", maxValueCategory3));
		}else if(searchCategory3.contains("milesPerGallonCity") && (minValueCategory3 != 0) && (maxValueCategory3 != 0)){
			criteria.add(Restrictions.ge("milesPerGallonCity", minValueCategory3));
			criteria.add(Restrictions.lt("milesPerGallonCity", maxValueCategory3));
		}
		
		int pageNumber = (pageNo-1)*4;
		criteria.setFirstResult(pageNumber);
		criteria.setMaxResults(4);
		
		session.beginTransaction();
		@SuppressWarnings("unchecked")
		List<CarDetails> results = (List<CarDetails>)criteria.list();
		session.disconnect();
		session.close();
		return results;
	}

}
