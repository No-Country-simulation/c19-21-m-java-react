package com.c19_21_m_java_react.LetsPet.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {


    public void addCorsMapping(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://127.0.0.1:500") //puerto para pruebas locales, cambiar para prod.
                .allowedMethods("GET", "POST", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
    }
}
