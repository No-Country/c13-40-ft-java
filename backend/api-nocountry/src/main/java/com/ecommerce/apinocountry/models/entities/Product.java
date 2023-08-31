package com.ecommerce.apinocountry.models.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Long id;

    @Column(name = "name_product")
    @NotBlank(message = "Product name is required")
    private String name;

    @Column(name = "description_product")
    @NotBlank(message = "Product description is required")
    private String description;

    @Column(name = "image_product", length = 150000)
    @Lob
    @NotBlank(message = "Product image URL is required")
    private String image;

    @Column(name = "stock_product")
    @PositiveOrZero(message = "Product stock must be zero or positive")
    private Integer stock;

    @Column(name = "price_product")
    @PositiveOrZero(message = "Product price must be zero or positive")
    private Double price;
    
    @Column(name = "category") // Esto puede variar dependiendo de tu base de datos
    @PositiveOrZero(message = "Category ID must be zero or positive")
    private Long categorys;


    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id_category", insertable = true, updatable = true)
    @JsonBackReference
    private Category category;
    
    public Product() {
    }

    public Product(Long id, String name, String description, String image, Integer stock, Double price,Long categorys, Category category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.stock = stock;
        this.price = price;
        this.categorys = categorys;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
    
    public Long getCategorys() {
        return categorys;
    }

    public void setCategorys(Long categorys) {
        this.categorys = categorys;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
