FROM openjdk:11
WORKDIR user/src
ADD ./target/payment-service-0.0.1-SNAPSHOT.jar  /user/src/payment-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","payment-service-0.0.1-SNAPSHOT.jar"]

