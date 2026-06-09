FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x gradlew

RUN ./gradlew clean build -x test

CMD ["java", "-jar", "build/libs/wst-0.0.1-SNAPSHOT.jar"]
