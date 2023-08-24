package com.ecommerce.apinocountry.services;


import com.ecommerce.apinocountry.models.entities.Category;
import org.springframework.stereotype.Service;
import com.ecommerce.apinocountry.repositories.CategoryRepository;
import java.util.List;
import java.util.Optional;
/**
 * This class provides implementation for the CategoryService interface.
 * It manages the business logic for working with Category entities.
 */

@Service
public class CategoryService implements ICategory {
    private CategoryRepository categoryRepository;

      /**
     * Constructor to inject the CategoryRepository dependency.
     *
     * @param categoryRepository The repository to interact with Category entities.
     */
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

      /**
     * Retrieves a list of all categories.
     *
     * @return List of Category objects.
     */
    @Override
    public List<Category> listCategories() {
        return categoryRepository.findAll();
    }

    /**
     * Retrieves a category by its ID.
     *
     * @param id The ID of the category to retrieve.
     * @return Optional containing the Category if found, otherwise empty.
     */
    @Override
    public Optional<Category> getCategory(Long id) {
        return categoryRepository.findById(id);
    }

    /**
     * Retrieves a category by its name.
     *
     * @param name The name of the category to retrieve.
     * @return Optional containing the Category if found, otherwise empty.
     */
    @Override
    public Optional<Category> getCategoryByName(String name) {
        return categoryRepository.findByName(name);
    }
 
      /**
     * Inserts a new category.
     *
     * @param category The Category object to insert.
     * @return The inserted Category object.
     */
    @Override
    public Category inserCategory(Category category) {
        return categoryRepository.save(category);
    }

     /**
     * Updates an existing category.
     *
     * @param category The Category object to update.
     * @return The updated Category object.
     */
    @Override
    public Category updateCategory(Category category) {
        return categoryRepository.save(category);
    }

     /**
     * Deletes a category by its ID.
     *
     * @param id The ID of the category to delete.
     */
    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public Optional<Category> getCategory() {
        throw new UnsupportedOperationException("Not supported yet."); 
    }
}