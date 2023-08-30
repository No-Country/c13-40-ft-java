package com.ecommerce.apinocountry.services;

import com.ecommerce.apinocountry.models.entities.Product;
import com.ecommerce.apinocountry.repositories.ProductRepository;
import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;


@Service
public class ProductService implements IProduct {

     private ProductRepository productrepository;

    /**
     * Constructor to inject the ProductRepository dependency.
     *
     * @param productRepository The repository to interact with Product entities.
     */
    public ProductService(ProductRepository productrepository) {
        this.productrepository = productrepository;
    }

    /**
     * Retrieves a list of all products.
     *
     * @return List of Product objects.
     */
    @Override
    public List<Product> listProducts() {
        return productrepository.findAll();
    }
    /**
     * Retrieves a product by its ID.
     *
     * @param id The ID of the product to retrieve.
     * @return Optional containing the Product if found, otherwise empty.
     */
    @Override
    public Optional<Product> getProduct(Long id) {
        return productrepository.findById(id);
    }

    /**
     * Retrieves a product by its name.
     *
     * @param name The name of the product to retrieve.
     * @return Optional containing the Product if found, otherwise empty.
     */
    @Override
    public Optional<Product> getProductByName(String name) {
        return productrepository.findByName(name);
    }
    /**
     * Inserts a new product.
     *
     * @param product The Product object to insert.
     * @return The inserted Product object.
     */
    @Override
    public Product inserProduct(Product product) {
        return productrepository.save(product);
    }
    /**
     * Updates an existing product.
     *
     * @param product The Product object to update.
     * @return The updated Product object.
     */
    @Override
    public Product updateProduct(Product product) {
        return productrepository.save(product);
    }
    /**
     * Deletes a product by its ID.
     *
     * @param id The ID of the product to delete.
     */
    @Override
    public void deleteProduct(Long id) {
        productrepository.deleteById(id);
    }
}