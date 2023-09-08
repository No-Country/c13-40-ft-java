package com.ecommerce.apinocountry.services;

import com.ecommerce.apinocountry.models.entities.Login;
import com.ecommerce.apinocountry.models.entities.User;
import com.ecommerce.apinocountry.repositories.LoginRepository;
import com.ecommerce.apinocountry.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final LoginRepository loginRepository;
    @Autowired
    public UserService(UserRepository userRepository, JwtService jwtService, LoginRepository loginRepository){
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.loginRepository = loginRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public LoginResponse saveUser(User user) {

        if(user.getFirstName() == null || user.getLastName() == null || user.getLogin().getEmail()==null || user.getLogin().getPassword() == null || !Objects.equals(user.getLogin().getRol(), "cliente")){
            return new LoginResponse(null, false, "Faltan datos del usuario requeridos para el registro");
        }
        if(!user.getLogin().getEmail().matches("^[A-Za-z0-9+_.-]+@(.+)$")){
            return new LoginResponse(null, false, "El correo electronico no es valido");
        }
        Optional<Login> userExist = loginRepository.findByEmail(user.getLogin().getEmail());
        if(userExist.isPresent()){
            return new LoginResponse(null, false, "El correo electronico ya esta registrado");
        }
        User userCreated =userRepository.save(user);
        String token = jwtService.generateToken(userCreated.getLogin().getEmail());
        return new LoginResponse(token, true, "Usuario registrado correctamente");
    }

    public User editUser(Long userId, User updatedUser) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User with id " + userId + " not found"));

        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());

        return userRepository.save(existingUser);

}

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }


}
