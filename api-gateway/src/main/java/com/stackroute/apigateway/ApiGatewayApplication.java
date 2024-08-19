package com.stackroute.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@EnableEurekaClient
@SpringBootApplication
public class ApiGatewayApplication {
	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}
	@Bean
	public RouteLocator gatewayRouteLocater(RouteLocatorBuilder builder) {
		return builder.routes()
				.route(r->r.path("/api/v1/auth/**")
						.uri("http://localhost:8013/"))
				.route(r->r.path("/api/events/**")
						.uri("http://localhost:8016"))
				.route(r->r.path("/api/participated-users/**")
						.uri("http://localhost:8016"))
				.route(r->r.path("/user/**")
						.uri("http://localhost:8011"))
				.route(r->r.path("/chats/**")
						.uri("http://localhost:8011"))
				// .route(r->r.path("/user/**")
				// 		.uri("http://localhost:8011"))
				.route(r->r.path("/api/gym/**")
						.uri("http://localhost:8010"))
				.route(r->r.path("/api/gym/equipments/**")
						.uri("http://localhost:8010"))
				.route(r->r.path("/api/gym/subscriptions/**")
						.uri("http://localhost:8010"))
				.route(r->r.path("/api/slot-bookings/**")
						.uri("http://localhost:8010"))
				.route(r->r.path("/api/Createslots/**")
						.uri("http://localhost:8010"))
				.route(r->r.path("/api/gym/trainers/**")
						.uri("http://localhost:8010"))
				.route(r->r.path("/api/feedback/**")
						.uri("http://localhost:8018"))
				.route(r->r.path("/api/notification/**")
						.uri("http://localhost:8014"))
				.route(r->r.path("/sms/**")
						.uri("http://localhost:8014"))
				.route(r->r.path("/payments/**")
						.uri("http://localhost:8015"))
				.route(r->r.path("/auth/**")
						.uri("http://localhost:8017"))
				.route(r->r.path("/**")
						.uri("http://localhost:8020"))



				.build();
	}



}
