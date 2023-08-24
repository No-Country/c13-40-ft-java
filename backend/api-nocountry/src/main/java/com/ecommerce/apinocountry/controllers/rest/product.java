package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.model.entity.Category;
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

@RestController
@RequestMapping("/api")
public class product {

    @GetMapping("/")
        public String Home(){

        return "Servicio API No Country";
        }

        /*
        *Dependency injection of product and category services
        */
     private IProduct iproduct;
     private ICategory icategoria;

    
    @Autowired
    public product(IProduct iproduct, ICategory icategoria) {
        this.iproduct = iproduct;
        this.icategoria = icategoria;
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

    /*Category*/
    /*
    *Endpoint to retrieve all categories
    */
    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getAllCategories(){
        return ResponseEntity.ok(icategoria.listCategories());
    }

    /*
    *Endpoint to retrieve a category by its ID
    */
    @GetMapping("/idcategory/{id}")
    public ResponseEntity<Object> getCategoryById(@PathVariable("id") Long id){
        Optional<Category> category = icategoria.getCategory(id);
        if(category.isPresent()){
            return ResponseEntity.ok(category.get());
        } else {
            String errorMessage = "No existe la categoria con ID: " + id;
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }

    /*
    *Endpoint to retrieve a category by its name
    */
    @GetMapping("/namecategory/{name}")
    public ResponseEntity<?> getCategoryByName(@PathVariable("name") String name){
        Optional<Category> category = icategoria.getCategoryByName(name);
        if(category.isPresent()){
            return ResponseEntity.ok(category.get());
        } else {
            String errorMessage = "No existe la categoria con Nombre: " + name;
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }

    /*
    *Endpoint to insert a new category
    */
    @PostMapping("/inserCategory")
    public ResponseEntity<Category> saveCategory(@RequestBody Category category){
        return ResponseEntity.ok(icategoria.inserCategory(category));
    }

    /*
    *Endpoint to update an existing category
    */
    @PutMapping("/updateCategory")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){
        Optional<Category> categoryupdate = icategoria.getCategory(category.getId());
        if(categoryupdate.isPresent()){
            return ResponseEntity.ok(icategoria.updateCategory(category));
        }else{
             return ResponseEntity.notFound().build();
        }
    }

    /*
    *Endpoint to delete a category by its ID
    */
    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity<Map<String, String>> deleteCategory(@PathVariable("id") Long id){
        Optional<Category> category = icategoria.getCategory(id);
        if(category.isPresent()){
            icategoria.deleteCategory(id);
            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("message", "Categoria eliminada exitosamente");
            return ResponseEntity.ok(successResponse);
        }else{
           String errorMessage = "No existe la categoria con ID: " + id + " para eliminar.";
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }
}
