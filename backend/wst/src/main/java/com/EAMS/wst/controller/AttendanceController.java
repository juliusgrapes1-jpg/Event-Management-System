package com.EAMS.wst.controller;

import com.EAMS.wst.model.Attendance;
import com.EAMS.wst.repository.AttendanceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "*")
public class AttendanceController {

    private final AttendanceRepository repository;

    public AttendanceController(AttendanceRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Map<String, Object> saveAttendance(@RequestBody List<Attendance> list) {

        Map<String, Object> response = new HashMap<>();

        try {
            repository.saveAll(list);

            response.put("success", true);
            response.put("message", "Attendance saved successfully");

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Error saving attendance");
        }

        return response;
    }

    @GetMapping
    public List<Attendance> getAttendance() {
        return repository.findAll();
    }
}