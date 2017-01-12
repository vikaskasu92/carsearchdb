package kasu.carSearch.DAO;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateContext implements ServletContextListener {

    private static SessionFactory sessionFactory;

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        sessionFactory = new Configuration().configure().buildSessionFactory();
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        sessionFactory.close();     
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

}
