package com.c19_21_m_java_react.LetsPet.repositories;

import com.c19_21_m_java_react.LetsPet.controllers.Caretaker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaretakerRepository extends JpaRepository <Caretaker, Long> {
}
