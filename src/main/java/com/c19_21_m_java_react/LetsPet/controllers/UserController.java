package com.c19_21_m_java_react.LetsPet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.c19_21_m_java_react.LetsPet.entities.User;
import com.c19_21_m_java_react.LetsPet.helpers.ViewRouteHelper;
import com.c19_21_m_java_react.LetsPet.services.IUserService;
import com.c19_21_m_java_react.LetsPet.services.implementation.UserService;

@Controller
@RequestMapping
public class UserController {

	private final IUserService userService;
     
	public UserController(IUserService userService) {
		super();
		this.userService = userService;
	}

	@GetMapping("/register")
    public ModelAndView registerForm() {
        ModelAndView mAV = new ModelAndView(ViewRouteHelper.USER_REGISTER);
        mAV.addObject("user", new User());
        return mAV;
    }
	
	@PostMapping("/save")
    public RedirectView saveUser(@ModelAttribute("user") User user) {
        userService.saveOrUpdate(user);
        return new RedirectView(ViewRouteHelper.ROUTE);
    } 
	
	@GetMapping("/login")
	public String login(Model model, @RequestParam(name = "error", required = false) String error,
			@RequestParam(name = "logout", required = false) String logout) {
		model.addAttribute("error", error);
		model.addAttribute("logout", logout);
		return ViewRouteHelper.USER_LOGIN;
	}

	@GetMapping("/logout")
	public String logout(Model model) {
		return ViewRouteHelper.USER_LOGOUT;
	}

	@GetMapping("/loginsuccess")
	public String loginCheck() {

		return "redirect:/index";
	}

}
