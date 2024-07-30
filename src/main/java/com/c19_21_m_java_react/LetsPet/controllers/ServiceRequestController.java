package com.c19_21_m_java_react.LetsPet.controllers;

import com.c19_21_m_java_react.LetsPet.services.CaretakerService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/service-request")
public class ServiceRequestController {

    private final CaretakerService caretakerService;

    public ServiceRequestController(CaretakerService caretakerService){

        this.caretakerService = caretakerService;
    }

    public String [] getServiceOptiones(){
        return new String[]{"cuidar", "pasear"};
    }

    public List<Caretaker> getCaretakers(){
        return caretakerService.findAllCaretakers();
    }
}
