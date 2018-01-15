package com.web.mapap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchAutoConfiguration;
import org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;

@SpringBootApplication
@EnableAutoConfiguration(exclude = {ElasticsearchDataAutoConfiguration.class,DataSourceTransactionManagerAutoConfiguration.class,ElasticsearchAutoConfiguration.class})
public class MapapApplication {

	public static void main(String[] args) {

	    SpringApplication.run(MapapApplication.class, args);
        System.out.println("helow");
    }
}
