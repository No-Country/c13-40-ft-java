/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.model.entity.Product;
import com.ecommerce.apinocountry.model.service.ICategory;
import com.ecommerce.apinocountry.model.service.IProduct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/product")
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
    @PostMapping
    public ResponseEntity<Product> saveProduct(@RequestBody Product product){
        return ResponseEntity.ok(iproduct.inserProduct(product));
    }

    /*
    * Endpoint to update an existing product
    */
    @PutMapping
    public ResponseEntity<Product> updateProduct(@RequestBody Product product){
        Optional<Product> productupdate = iproduct.getProduct(product.getId());
        if(productupdate.isPresent()){
            return ResponseEntity.ok(iproduct.updateProduct(product));
        }else{
             return ResponseEntity.notFound().build();
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
