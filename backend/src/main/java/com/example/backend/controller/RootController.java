package com.example.backend.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RootController implements ErrorController {

    @GetMapping({"/error", "/"})
    public String redirectRoot() {
        return "index.html";
    }

    public String getErrorPath() {
        return "/error";
    }
}


