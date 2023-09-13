package com.ecommerce.apinocountry.models.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    // private Long logins_id;

    @ManyToOne(cascade = CascadeType.ALL) // Añadir la relación con Login y la cascada
    @JoinColumn(name = "login_id") // Cambiar el nombre de la columna
    private Login login; // Agregar el campo login

    public User() {

    }

    public User(Long id, String firstName, String lastName, /*Long logins_id ,*/ Login login) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        // this.logins_id = logins_id;
        this.login = login;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /* @Column(name = "login_id")
    @PositiveOrZero(message = "login is required")
    public Long getLogin_id() {
        return logins_id;
    }

    public void setLogin_id(Long login_id) {
        this.login_id = login_id;
    }*/
    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

}
