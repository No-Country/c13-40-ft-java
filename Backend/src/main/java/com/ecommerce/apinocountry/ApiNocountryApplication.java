package com.ecommerce.apinocountry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.ecommerce.apinocountry") 
public class ApiNocountryApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiNocountryApplication.class, args);
    }

}
