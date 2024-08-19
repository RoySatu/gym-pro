FROM openjdk:11
WORKDIR user/src
ADD ./target/event-service-0.0.1-SNAPSHOT.jar  /user/src/event-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","event-service-0.0.1-SNAPSHOT.jar"]