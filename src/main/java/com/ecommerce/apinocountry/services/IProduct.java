package com.ecommerce.apinocountry.services;

import com.ecommerce.apinocountry.models.entities.Product;
import java.util.List;
import java.util.Optional;
/**
 * This interface defines the contract for interacting with Product entities.
 * It provides methods to manage products including retrieval, insertion, updating, and deletion.
 */
public interface IProduct {
    List<Product> listProducts();
    Optional<Product> getProduct(Long id);
    Optional<Product> getProductByName(String name);
    public Product inserProduct(Product product);
    Product updateProduct(Product product);
    void deleteProduct(Long id);
}