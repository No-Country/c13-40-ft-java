package com.ecommerce.apinocountry.repositories;

import com.ecommerce.apinocountry.models.entities.Login;
import java.util.Optional;

import com.ecommerce.apinocountry.models.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author godoy
 */
@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
   Optional<Login> findByEmail(String email);

}