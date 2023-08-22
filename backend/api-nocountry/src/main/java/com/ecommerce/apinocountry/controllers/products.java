package com.ecommerce.apinocountry.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class products {

    @GetMapping("/")
        public String Home(){

        return "Servicio API No Country";
        }

}
