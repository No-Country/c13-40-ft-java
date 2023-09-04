package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.models.entities.Category;
import com.ecommerce.apinocountry.services.ICategory;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
public class CategoryController {
    
     private ICategory icategoria;
     
    @Autowired
    public CategoryController(ICategory icategoria){
        this.icategoria = icategoria;
    }
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
    @PostMapping("/insertCategory")
    public ResponseEntity<Object> saveCategory(@Valid @RequestBody Category category, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            bindingResult.getFieldErrors().forEach((error) -> {
                String fieldName = error.getField();
                String errorMessage = error.getDefaultMessage();
                errors.put(fieldName, errorMessage);
            });
            return ResponseEntity.badRequest().body(errors);
        }
        
        Category savedCategory = icategoria.inserCategory(category);
        
        if (savedCategory != null) {
            return ResponseEntity.ok(savedCategory);
        } else {
            String errorMessage = "No se pudo insertar la categoría.";
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }

    /*
    *Endpoint to update an existing category
    */
    @PutMapping("/updateCategory/{id}")
    public ResponseEntity<Object> updateCategory(@PathVariable("id") Long id, @Valid @RequestBody Category category, BindingResult bindingResult) {
         if (bindingResult.hasErrors()) {
             Map<String, String> errors = new HashMap<>();
             bindingResult.getFieldErrors().forEach((error) -> {
                 String fieldName = error.getField();
                 String errorMessage = error.getDefaultMessage();
                 errors.put(fieldName, errorMessage);
             });
             return ResponseEntity.badRequest().body(errors);
         }
         Optional<Category> categoryUpdate = icategoria.getCategory(id);
         if (categoryUpdate.isPresent()) {
             Category updatedCategory = categoryUpdate.get();
             updatedCategory.setName(category.getName());
             Category savedCategory = icategoria.updateCategory(updatedCategory);
             return ResponseEntity.ok(savedCategory);
         } else {
             Map<String, String> errorMessage = new HashMap<>();
             errorMessage.put("message", "Category not found");
             errorMessage.put("details", "La categoría con el ID proporcionado no fue encontrada.");
             return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
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
