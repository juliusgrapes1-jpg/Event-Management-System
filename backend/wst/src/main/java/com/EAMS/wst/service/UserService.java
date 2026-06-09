package com.EAMS.wst.service;

import com.EAMS.wst.model.User;
import com.EAMS.wst.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public String register(User user) {
        if (repo.findByUsername(user.getUsername()) != null) {
            return "Username already exists";
        }

        repo.save(user);
        return "Registered successfully";
    }

    public boolean login(String username, String password) {
        User user = repo.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}