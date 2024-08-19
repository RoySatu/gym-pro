FROM openjdk:11
WORKDIR user/src
ADD ./target/notification-service-0.0.1-SNAPSHOT.jar  /user/src/notification-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","notification-service-0.0.1-SNAPSHOT.jar"]