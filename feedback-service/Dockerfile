FROM openjdk:11
WORKDIR user/src
ADD ./target/feedback-service-0.0.1-SNAPSHOT.jar  /user/src/feedback-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","feedback-service-0.0.1-SNAPSHOT.jar"]