plugins {
    java
    id("org.springframework.boot") version "4.0.6"
    id("io.spring.dependency-management") version "1.1.7"
}

group = "com.EAMS"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    // Web API
    implementation("org.springframework.boot:spring-boot-starter-web")

    // JPA (Database ORM)
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    // Validation
    implementation("org.springframework.boot:spring-boot-starter-validation")

    // PostgreSQL DRIVER (IMPORTANT FIX)
    runtimeOnly("org.postgresql:postgresql")

    // Dev tools (optional for local dev only)
    developmentOnly("org.springframework.boot:spring-boot-devtools")

    // Testing
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<Test> {
    useJUnitPlatform()
}
