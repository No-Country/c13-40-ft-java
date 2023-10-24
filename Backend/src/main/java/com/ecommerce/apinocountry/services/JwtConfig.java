package com.ecommerce.apinocountry.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author godoy
 */
@Configuration
public class JwtConfig {

    @Value("${spring.jwt.secret}")
    private String jwtSecret;

    public String getJwtSecret() {
        return jwtSecret;
    }
}
