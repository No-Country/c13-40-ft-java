package com.ecommerce.apinocountry.services;

import com.ecommerce.apinocountry.models.entities.Login;
import com.ecommerce.apinocountry.repositories.LoginRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private final LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }


    public Optional<Login> findUserByEmail(String email) {
        System.out.println(email);return loginRepository.findByEmail(email);
    }
}
