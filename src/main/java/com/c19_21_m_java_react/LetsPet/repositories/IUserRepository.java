package com.c19_21_m_java_react.LetsPet.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.c19_21_m_java_react.LetsPet.entities.User;

@Repository("userRepository")
public interface IUserRepository extends JpaRepository<User, Serializable> {

	User findByEmail(String email);
}
