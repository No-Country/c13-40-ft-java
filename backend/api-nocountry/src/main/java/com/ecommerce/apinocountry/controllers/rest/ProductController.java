/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.models.entities.Product;
import com.ecommerce.apinocountry.services.IProduct;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author godoy
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class ProductController {
     /*
        *Dependency injection of product and category services
        */
     private IProduct iproduct;
     
    @Autowired
    public ProductController(IProduct iproduct){
        this.iproduct = iproduct;
    }
    
      /*
     *Endpoint to retrieve all products
     */
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        return ResponseEntity.ok(iproduct.listProducts());
    }

    /*
    *Endpoint to retrieve a product by its ID
    */
    @GetMapping("/idproducts/{id}")
    public ResponseEntity<Object> getProductById(@PathVariable("id") Long id){
        Optional<Product> product = iproduct.getProduct(id);
        if(product.isPresent()){
            return ResponseEntity.ok(product.get());
        } else {
            String errorMessage = "No existe el producto con ID: " + id; 
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }

    /*
    *Endpoint to retrieve a product by its name
    */
    @GetMapping("/nameproducts/{name}")
    public ResponseEntity<?> getProductByName(@PathVariable("name") String name){
        Optional<Product> product = iproduct.getProductByName(name);
        if(product.isPresent()){
            return ResponseEntity.ok(product.get());
        } else {
            String errorMessage = "No existe el producto con Nombre: " + name;
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }

    /*
    * Endpoint to insert a new product
    */
    @PostMapping(path = "/insertProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> saveProduct(@Valid @RequestBody Product product, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            bindingResult.getFieldErrors().forEach((error) -> {
                String fieldName = error.getField();
                String errorMessage = error.getDefaultMessage();
                errors.put(fieldName, errorMessage);
            });
            return ResponseEntity.badRequest().body(errors);
        }
        Product savedProduct = iproduct.inserProduct(product);
        
        if (savedProduct != null) {
            return ResponseEntity.ok(savedProduct);
        } else {
            String errorMessage = "No se pudo insertar el producto.";
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }

    /*
    * Endpoint to update an existing product
    */
    @PutMapping("/updateProduct/{id}")
    public ResponseEntity<Object> updateProduct(@PathVariable("id") Long id, @Valid @RequestBody Product product, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            bindingResult.getFieldErrors().forEach((error) -> {
                String fieldName = error.getField();
                String errorMessage = error.getDefaultMessage();
                errors.put(fieldName, errorMessage);
            });
            return ResponseEntity.badRequest().body(errors);
        }

        Optional<Product> productUpdate = iproduct.getProduct(id);
        if (productUpdate.isPresent()) {
            Product updatedProduct = productUpdate.get();
            updatedProduct.setName(product.getName());
            updatedProduct.setDescription(product.getDescription());
            updatedProduct.setImage(product.getImage());
            updatedProduct.setStock(product.getStock());
            updatedProduct.setPrice(product.getPrice());
            updatedProduct.setCategory(product.getCategory());

            Product savedProduct = iproduct.updateProduct(updatedProduct);
            return ResponseEntity.ok(savedProduct);
        } else {
            Map<String, String> errorMessage = new HashMap<>();
            errorMessage.put("message", "Product not found");
            errorMessage.put("details", "El producto con el ID proporcionado no fue encontrado.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }

    /*
    * Endpoint to delete a product by its ID
    */
    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<Map<String, String>> deleteProduct(@PathVariable("id") Long id){
        Optional<Product> product = iproduct.getProduct(id);
        if(product.isPresent()){
            iproduct.deleteProduct(id);
            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("message", "Producto eliminado exitosamente");
            return ResponseEntity.ok(successResponse);
        }else{
           String errorMessage = "No existe el producto con ID: " + id + " para eliminar.";
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }
}
