package com.ecommerce.apinocountry.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class products {

    @RequestMapping(value = "/", method = RequestMethod.GET)
        public String Home(){

        return "Servicio API No Country";
        }

}
