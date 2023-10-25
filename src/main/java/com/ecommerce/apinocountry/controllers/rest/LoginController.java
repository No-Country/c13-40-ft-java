package com.ecommerce.apinocountry.controllers.rest;

import com.ecommerce.apinocountry.models.entities.Login;
import com.ecommerce.apinocountry.repositories.LoginRepository;
import com.ecommerce.apinocountry.services.JwtService;
import com.ecommerce.apinocountry.services.LoginResponse;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author godoy
 */
@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://no-country-comfy.vercel.app/", "https://3000-monospace-c13-40-ft-java-1698186246285.cluster-lknrrkkitbcdsvoir6wqg4mwt6.cloudworkstations.dev"})
@RequestMapping("/")
public class LoginController {
    private final JwtService jwtService;
    private final LoginRepository loginRepository;

     @Autowired
    public LoginController(JwtService jwtService, LoginRepository loginRepository) {
        this.jwtService = jwtService;
        this.loginRepository = loginRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody Login authRequest) {
        // Busca al usuario por su dirección de correo electrónico en el repositorio
        Optional<Login> userOptional = loginRepository.findByEmail(authRequest.getEmail());
        // Verifica si el usuario existe en base al Optional
        if (userOptional.isPresent()) {
            Login user = userOptional.get();
            // Verifica el password del usuario
            if (user.getPassword().equals(authRequest.getPassword())) {
                // Genera el token JWT si las credenciales son válidas
                String token = jwtService.generateToken(user.getEmail());
                // Crea una instancia de LoginResponse con los valores deseados
                LoginResponse loginResponse = new LoginResponse(token, true, "Bienvenido");
                // Retorna la instancia de LoginResponse en la respuesta con el estado 200 OK
                return ResponseEntity.ok(loginResponse);
            } else {
                // Retorna una respuesta de error si el password no es válido
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse(null, false, "Contraseña incorrecta"));
            }
        } else {
            // Retorna una respuesta de error si el usuario no existe
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse(null, false, "Usuario no encontrado"));
        }
    }
}
