FROM openjdk:11
WORKDIR user/src
ADD ./target/admin-service-0.0.1-SNAPSHOT.jar  /user/src/admin-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","admin-service-0.0.1-SNAPSHOT.jar"]