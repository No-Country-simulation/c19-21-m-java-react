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

@Service("userService")
public class UserService implements UserDetailsService {
    
    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(IUserRepository userRepository, PasswordEncoder passwordEncoder) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        com.c19_21_m_java_react.LetsPet.entities.User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return buildUser(user, buildGrantedAuthorities(user.getUserRoles()));
    }

    private User buildUser(com.c19_21_m_java_react.LetsPet.entities.User user, List<GrantedAuthority> grantedAuthorities) {
        return new User(user.getEmail(), user.getPassword(), user.isEnabled(), 
                        true, true, true, grantedAuthorities);
    }

    private List<GrantedAuthority> buildGrantedAuthorities(Set<UserRole> userRoles) {
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (UserRole userRole : userRoles) {
            grantedAuthorities.add(new SimpleGrantedAuthority(userRole.getRole()));
        }
        return new ArrayList<>(grantedAuthorities);
    }
    

    public void saveOrUpdate(com.c19_21_m_java_react.LetsPet.entities.User user) {
    	user.setPassword(passwordEncoder.encode(user.getPassword()));
    	user.setEnabled(true);
        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole("ROLE_USER"); 
        Set<UserRole> roles = new HashSet<>();
        roles.add(userRole);
        user.setUserRoles(roles);

    	userRepository.save(user);
    }
   
}