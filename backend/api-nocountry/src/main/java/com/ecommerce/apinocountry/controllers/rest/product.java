package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.model.entity.Category;
import com.ecommerce.apinocountry.model.entity.Product;
import com.ecommerce.apinocountry.model.service.ICategory;
import com.ecommerce.apinocountry.model.service.IProduct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class product {

    @GetMapping("/")
        public String Home(){
        return "Servicio API No Country";
        }
}
