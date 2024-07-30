package com.c19_21_m_java_react.LetsPet.services.implementation;

import com.c19_21_m_java_react.LetsPet.controllers.Caretaker;
import com.c19_21_m_java_react.LetsPet.repositories.CaretakerRepository;
import com.c19_21_m_java_react.LetsPet.services.CaretakerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaretakerServiceImp implements CaretakerService {
    private final CaretakerRepository caretakerRepository;

    public CaretakerServiceImp(CaretakerRepository caretakerRepository) {
        this.caretakerRepository = caretakerRepository;
    }

    @Override
    public List<Caretaker> findAllCaretakers() {
        return caretakerRepository.findAll();
    }
}
