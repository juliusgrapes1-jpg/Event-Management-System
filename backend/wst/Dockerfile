# Use Java 21 (same as Render expects)
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy everything
COPY . .

# Give permission to gradlew
RUN chmod +x gradlew

# Build the project
RUN ./gradlew clean build -x test

# Run the jar
CMD ["java", "-jar", "build/libs/*.jar"]