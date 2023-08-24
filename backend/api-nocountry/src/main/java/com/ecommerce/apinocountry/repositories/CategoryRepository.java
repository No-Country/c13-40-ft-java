package com.ecommerce.apinocountry.repositories;

import com.ecommerce.apinocountry.models.entities.Category;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * This interface provides methods to interact with the database for Category entities.
 * It extends JpaRepository for basic CRUD operations.
 */
public interface CategoryRepository extends JpaRepository<Category, Long> {
    /**
     * Retrieves a category by its name.
     *
     * @param name The name of the product to retrieve.
     * @return Optional containing the Product if found, otherwise empty.
     */
 Optional<Category> findByName(String name);
}