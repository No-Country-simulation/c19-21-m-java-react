package com.c19_21_m_java_react.LetsPet.entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name="user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name", nullable = false, length = 45)
	private String name;

	@Column(name = "last_name", nullable = false, length = 45)
	private String lastName;

	@Column(name = "email", unique = true, nullable = false, length = 45)
	private String email;

	@Column(name = "password", nullable = false, length = 60)
	private String password;

	@Column(name = "enabled")
	private boolean enabled;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private Set<UserRole> userRoles = new HashSet<>();

	public boolean isAdmin() {
		for (UserRole userRole : userRoles) {
			if (UserRole.ROLE_ADMIN.equals(userRole.getRole())) {
				return true;
			}
		}
		return false;
	}

	public void addRole(String role) {
		UserRole userRole = new UserRole(this, role);
		userRoles.add(userRole);
	}

}

