package com.example.service;

import com.example.dto.UserUpdateRequest;
import org.springframework.security.core.userdetails.User;

public interface UserService {
    User getCurrentUser(org.springframework.security.core.Authentication authentication);
    void updateUser(String username, UserUpdateRequest request);
} 