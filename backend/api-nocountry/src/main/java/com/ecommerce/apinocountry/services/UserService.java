package com.ecommerce.apinocountry.services;

import com.ecommerce.apinocountry.models.entities.User;
import com.ecommerce.apinocountry.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User editUser(Long userId, User updatedUser) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User with id " + userId + " not found"));

        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setBirthDate(updatedUser.getBirthDate());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setCountry(updatedUser.getCountry());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setRol_id(updatedUser.getRol_id());

        return userRepository.save(existingUser);

}

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }


}
