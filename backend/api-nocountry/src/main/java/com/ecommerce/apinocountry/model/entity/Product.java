package com.ecommerce.apinocountry.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * This class represents the Product entity in the database.
 */
@Entity
@Table(name = "producto")
public class Product {
    private Long id;
    private String name;
    private String description;
    private String image;
    private Integer stock;
    private Double price;
    private Long category;
    
    
    private Category categorys;// Reference to the associated Category entity

    public Product() {
    }
    
    /**
     * Constructor to initialize all fields of the Product entity.
     *
     * @param id The unique identifier for the product.
     * @param name The name of the product.
     * @param description The description of the product.
     * @param image The image URL of the product.
     * @param stock The available stock of the product.
     * @param price The price of the product.
     * @param category The ID of the associated category.
     * @param categorys The associated Category object.
     */
    public Product(Long id, String name, String description, String image, Integer stock, Double price, Long category, Category categorys) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.stock = stock;
        this.price = price;
        this.category = category;
        this.categorys = categorys;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name_product")
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description_product")
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "image_product", length = 150000)
    @Lob
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }

    @Column(name = "stock_product")
    public Integer getStock() {
        return stock;
    }
    public void setStock(Integer stock) {
        this.stock = stock;
    }

    @Column(name = "price_product")
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }

    @Column(name = "category")
    public Long getCategory() {
        return category;
    }
    public void setCategory(Long category) {
        this.category = category;
    }

    @ManyToOne(cascade = {CascadeType.ALL}) // Many-to-One relationship with Category entity
    @JoinColumn(name = "category", insertable = false, updatable = false)// Prevents insert and update operations on this column
    @JsonBackReference// Annotation to handle serialization to JSON and avoid circular references
    public Category getCategoria() {
        return categorys;
    }
    public void setCategoria(Category categorys) {
        this.categorys = categorys;
    }

}