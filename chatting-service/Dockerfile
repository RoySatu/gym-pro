FROM openjdk:11
WORKDIR user/src
ADD ./target/chatting-service-0.0.1-SNAPSHOT.jar  /user/src/chatting-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","chatting-service-0.0.1-SNAPSHOT.jar"]