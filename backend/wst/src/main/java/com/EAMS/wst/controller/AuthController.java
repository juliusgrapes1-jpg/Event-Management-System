package com.EAMS.wst.controller;

import com.EAMS.wst.model.User;
import com.EAMS.wst.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody User user) {

        Map<String, Object> response = new HashMap<>();

        try {
            userRepository.save(user);

            response.put("success", true);
            response.put("message", "Registered successfully");

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Username or email already exists");
        }

        return response;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {

        Map<String, Object> response = new HashMap<>();

        User found = userRepository.findByUsername(user.getUsername());

        if (found != null && found.getPassword().equals(user.getPassword())) {

            response.put("success", true);
            response.put("message", "Login successful");

        } else {

            response.put("success", false);
            response.put("message", "Invalid credentials");
        }

        return response;
    }
}