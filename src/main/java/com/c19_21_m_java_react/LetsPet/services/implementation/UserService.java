package com.c19_21_m_java_react.LetsPet.services.implementation;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.c19_21_m_java_react.LetsPet.entities.UserRole;
import com.c19_21_m_java_react.LetsPet.repositories.IUserRepository;
import com.c19_21_m_java_react.LetsPet.services.IUserService;

@Service("userService")
public class UserService implements IUserService{

    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(IUserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void saveOrUpdate(com.c19_21_m_java_react.LetsPet.entities.User  user) {
    	//Encripto contraseña
        user.setPassword(passwordEncoder.encode(user.getPassword())); 
        user.setEnabled(true);
        //Seteo rol como usuario, luego vemos los roles de administrador y cuidador
        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole("ROLE_USER"); 
        Set<UserRole> roles = new HashSet<>();
        roles.add(userRole);
        user.setUserRoles(roles);

        userRepository.save(user);
    }
}