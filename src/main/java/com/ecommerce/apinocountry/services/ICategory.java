package com.ecommerce.apinocountry.services;

import com.ecommerce.apinocountry.models.entities.Category;
import java.util.List;
import java.util.Optional;
/**
 * This interface defines the contract for interacting with Category entities.
 * It provides methods to manage products including retrieval, insertion, updating, and deletion.
 */
public interface ICategory {
    List<Category> listCategories();
    Optional<Category> getCategory(Long id);
    Optional<Category> getCategoryByName(String name);
    Category inserCategory(Category category);
    Category updateCategory(Category category);
    void deleteCategory(Long id);

    public Optional<Category> getCategory();
}