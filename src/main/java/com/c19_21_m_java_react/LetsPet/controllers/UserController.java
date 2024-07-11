package com.c19_21_m_java_react.LetsPet.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.c19_21_m_java_react.LetsPet.entities.User;
import com.c19_21_m_java_react.LetsPet.services.IUserService;

@Controller
@RequestMapping("/user")
public class UserController {

	private final IUserService userService;
    private final PasswordEncoder passwordEncoder;
     
	public UserController(IUserService userService, PasswordEncoder passwordEncoder) {
		super();
		this.userService = userService;
		this.passwordEncoder = passwordEncoder;
	}

	@GetMapping("/register")
    public ModelAndView registerForm() {
        ModelAndView modelAndView = new ModelAndView("registro");
        modelAndView.addObject("user", new User());
        return modelAndView;
    }
	
	@PostMapping("/save")
    public String registrarUsuario(@ModelAttribute("user") User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.saveOrUpdate(user);
        return "redirect:/login";
    }
}
