package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.models.entities.Login;
import com.ecommerce.apinocountry.models.entities.User;
import com.ecommerce.apinocountry.repositories.LoginRepository;
import com.ecommerce.apinocountry.services.JwtService;
import com.ecommerce.apinocountry.services.LoginResponse;
import com.ecommerce.apinocountry.services.LoginService;
import com.ecommerce.apinocountry.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;
    private final LoginService loginService;

    @Autowired
    public UserController(UserService userService, JwtService jwtService, LoginService loginService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.loginService = loginService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();

    }

    @PostMapping("/insertUser")
    public ResponseEntity<LoginResponse> createUser(@RequestBody User user) {
        LoginResponse respusta = userService.saveUser(user);
        if(!respusta.isSuccess()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(respusta);
        }
        return ResponseEntity.status(HttpStatus.OK).body(respusta);
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
