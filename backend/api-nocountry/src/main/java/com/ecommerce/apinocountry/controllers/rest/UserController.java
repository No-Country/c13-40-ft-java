package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.models.entities.User;
import com.ecommerce.apinocountry.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();

    }

    @PostMapping("/insertUser")
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }


    @PutMapping("/updateUser/{userId}")
    public ResponseEntity<User> editUser(@PathVariable Long userId, @RequestBody User updatedUser) {
        User editedUser = userService.editUser(userId, updatedUser);
        return ResponseEntity.ok(editedUser);
    }
    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
