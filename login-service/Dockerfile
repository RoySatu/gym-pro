FROM openjdk:11
WORKDIR user/src
ADD ./target/AuthenticatedBackend-0.0.1-SNAPSHOT.jar  /user/src/AuthenticatedBackend-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","AuthenticatedBackend-0.0.1-SNAPSHOT.jar"]