package com.ecommerce.apinocountry.repositories;

import com.ecommerce.apinocountry.models.entities.Product;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * This interface provides methods to interact with the database for Product entities.
 * It extends JpaRepository for basic CRUD operations.
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
    /**
     * Retrieves a product by its name.
     *
     * @param name The name of the product to retrieve.
     * @return Optional containing the Product if found, otherwise empty.
     */
 Optional<Product> findByName(String name);
}