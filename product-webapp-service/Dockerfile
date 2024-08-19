FROM openjdk:11
WORKDIR user/src
ADD ./target/product-webapp-service-0.0.1-SNAPSHOT.jar  /user/src/product-webapp-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","product-webapp-service-0.0.1-SNAPSHOT.jar"]
