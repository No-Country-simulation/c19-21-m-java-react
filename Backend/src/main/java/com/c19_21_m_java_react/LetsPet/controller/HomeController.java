package com.c19_21_m_java_react.LetsPet.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class HomeController {

    public String Home(){
        return "Welcome form secure endpoint";
    }
}
