package com.stackroute.productwebappservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ProductWebappServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductWebappServiceApplication.class, args);
	}

}
