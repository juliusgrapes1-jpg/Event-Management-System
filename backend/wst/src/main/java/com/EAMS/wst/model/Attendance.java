package com.EAMS.wst.model;

import jakarta.persistence.*;

@Entity
@Table(name = "attendance")
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String event;
    private String eventDate;
    private String name;
    private String birthdate;
    private String email;

    public Attendance() {}

    public Attendance(String event, String eventDate, String name, String birthdate, String email) {
        this.event = event;
        this.eventDate = eventDate;
        this.name = name;
        this.birthdate = birthdate;
        this.email = email;
    }

    public Long getId() { return id; }

    public String getEvent() { return event; }
    public void setEvent(String event) { this.event = event; }

    public String getEventDate() { return eventDate; }
    public void setEventDate(String eventDate) { this.eventDate = eventDate; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBirthdate() { return birthdate; }
    public void setBirthdate(String birthdate) { this.birthdate = birthdate; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
