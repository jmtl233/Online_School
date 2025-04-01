package com.example.online_school.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    
    @GetMapping("/home")
    public String home(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            model.addAttribute("username", auth.getName());
            model.addAttribute("role", auth.getAuthorities().iterator().next().getAuthority());
            return "home";
        }
        return "redirect:/login";
    }
} 